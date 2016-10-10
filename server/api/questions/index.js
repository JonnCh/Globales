'use strict';

var express = require('express');
var controller = require('./questions.controller');

var router = express.Router();

router.get('/MathQuestions', controller.MathQuestions);

router.get('/GrammarQuestions', controller.GrammarQuestions);

module.exports = router;
