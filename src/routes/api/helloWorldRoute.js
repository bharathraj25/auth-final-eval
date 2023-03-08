const router = require('express').Router();
const { getHelloWorld } = require('../../controllers');

router.get('/', getHelloWorld);

module.exports = router;