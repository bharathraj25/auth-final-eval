const db = require('../../db/models');
const utilService = require('../utils');

module.exports = {
  async createUser(email, password) {
    const newUser = await db
      .Users
      .create({
        email,
        password: utilService.hashString(password)
      });
    delete newUser.dataValues.password;
    return newUser;
  }
};
