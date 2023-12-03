const model = require('./model');
const utils = require('./utils');

function getUsers(req, res) {
  const users = model.getUsers();
  utils.sendResponse(res, 200, users);
}

function createUser(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const userData = JSON.parse(body);
    const user = model.addUser(userData);
    utils.sendResponse(res, 201, user);
  });
}

function getUserById(req, res, id) {
  const user = model.getUserById(id);
  if (user) {
    utils.sendResponse(res, 200, user);
  } else {
    utils.sendResponse(res, 404, { message: 'User not found' });
  }
}


module.exports = {
  getUsers,
  createUser,
  getUserById,
};
