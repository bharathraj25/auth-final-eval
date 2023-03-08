const userServices = require('../services/user.service');

const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userData = await userServices.createUser(username, password);
    res.status(201).json(userData);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser
};