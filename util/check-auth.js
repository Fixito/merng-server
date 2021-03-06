import { AuthenticationError } from 'apollo-server-errors';
import jwt from 'jsonwebtoken';
import mongodb from '../config/config.js';

const { SECRET_KEY } = mongodb;

export default (context) => {
  // context = { ...headers }
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    // Bearer ...
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);

        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]'");
  }
  throw new Error('Authorization header must be provided');
};
