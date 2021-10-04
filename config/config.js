// Figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // We are in production - return the prod set of keys
  export default require('./prod.js');
} else {
  // We are in development - return the dev keys
  export default require('./dev.js');
}
