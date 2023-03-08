const router = require('express').Router();
const { joiValidator } = require('../../middlewares/joiValidation');
const { errorHandler } = require('../../middlewares/errorHandler');

const userController = require('../../controllers/user.controller.js');
const userSchema = require('../../schemas/user.schema');

const authController = require('../../controllers/auth.controller.js');
const authSchema = require('../../schemas/auth.schema');

router.post(
  '/users',
  joiValidator(userSchema.create),
  userController.createUser
);

router.post(
  '/login',
  joiValidator(authSchema.login),
  authController.login
);
router.post(
  '/token/validate',
  joiValidator(authSchema.validateToken),
  authController.validateToken
);

router.use(errorHandler);

module.exports = router;
