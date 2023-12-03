const controller = require('./controller');

function handleRequest(req, res) {
  const { method, url } = req;

  if (url === '/users') {
    if (method === 'GET') {
      controller.getUsers(req, res);
      return;
    }
    if (method === 'POST') {
      controller.createUser(req, res);
      return
    }
  }
  if (url.startsWith('/users/') && method === 'GET') {
    const id = url.split('/')[2];
    controller.getUserById(req, res, id);
  }
}

module.exports = { handleRequest };
