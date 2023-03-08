const authService = require('../services/auth.service');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const tokenObject = await authService.login(username, password);
    res.status(200).json(tokenObject);
  }
  catch (error) {
    next(error);
  }
};

const validateToken = async (req, res, next) => {
  try {
    const { token } = req.body;
    const validatedData = await authService.validateToken(token);
    res.status(200).json(validatedData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  validateToken
};
