const db = require('../../db/models');
const utilService = require('../utils');

module.exports = {
  async createUser(username, password) {
    const newUser = await db
      .Users
      .create({
        username,
        password: utilService.hashString(password)
      });
    delete newUser.dataValues.password;
    return newUser;
  }
};
