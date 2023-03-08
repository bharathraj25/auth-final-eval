const router = require('express').Router();
const helloWorldRoute = require('./helloWorldRoute');

router.use('/', helloWorldRoute);

module.exports = router;