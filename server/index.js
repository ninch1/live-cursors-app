const http = require('http');
const { WebSocketServer } = require('ws');

const url = require('url');
const uuidv4 = require('uuid').v4;

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8000;

const connections = {};
const users = {};

wsServer.on('connection', (conncetion, request) => {
  // ws://localhost:8000?username=Alex

  const { username } = url.parse(request.url, true).query;
  const uuid = uuidv4();
  console.log(username);
  console.log(uuid);

  connections[uuid] = connection;

  users[uuid] = {
    username,
    state: {},
  };
});

server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});
