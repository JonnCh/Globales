'use strict';

var express = require('express');
var controller = require('./auth.controller');

var router = express.Router();

router.get('/login', controller.login);
router.get('/singup', controller.singup);
module.exports = router;
