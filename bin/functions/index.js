require('dotenv').config();
const debug = require('debug')('affinity-test-generator:server');

module.exports = {
  onError: (error) => {
    if (error.syscall !== 'listen') throw error;
    const bind = `Port ${process.env.PORT}`;

    switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      break;
    default:
      throw error;
    }
  },

  onListening: (server) => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
  },
};
