import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';
import './config/config.js';

const { MONGODB } = mongodb;

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({
      port: PORT
    });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });
