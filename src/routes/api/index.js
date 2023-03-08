const router = require('express').Router();
const helloWorldRoute = require('./helloWorld.route');
const userAuthRoute = require('./userAuth.route');
const { errorHandler } = require('../../middlewares/errorHandler');

router.use('/', helloWorldRoute);
router.use('/auth', userAuthRoute);

router.use(errorHandler);
module.exports = router;