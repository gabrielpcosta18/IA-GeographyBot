var router = require('express').Router();
var controller = require('./controller')();

router.get('/users', controller.listUsers);

module.exports = router;
