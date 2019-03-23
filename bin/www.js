const http = require('http');
const dotenv = require('dotenv');
const { onError, onListening } = require('./functions');

dotenv.config();
const app = require('../src/app');

const port = process.env.PORT || '3000';

app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

server.on('error', onError);
server.on('listening', () => onListening(server));
