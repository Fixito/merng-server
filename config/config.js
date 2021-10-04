// Figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // We are in production - return the prod set of keys
  import mongodb from './prod';
} else {
  // We are in development - return the dev keys
  import mongodb from './dev';
}
