const userServices = require('../services/user.service');

const createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const userData = await userServices.createUser(email, password);
    res.status(201).json(userData);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser
};