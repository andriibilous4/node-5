const http = require('http');
const router = require('./router');

const server = http.createServer((req, res) => {
  router.handleRequest(req, res);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
