let users = [];

function getUsers() {
  return users;
}

function addUser(userData) {
  users.push(userData);
  return userData;
}

function getUserById(id) {
  return users.find(user => user.id === parseInt(id));
}

module.exports = {
  getUsers,
  addUser,
  getUserById,
};
