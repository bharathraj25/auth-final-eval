const router = require('express').Router();
const helloWorldController = require('../../controllers/helloWorld.controller');

router.get('/', helloWorldController.getHelloWorld);

module.exports = router;