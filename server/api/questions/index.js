'use strict';

var express = require('express');
var controller = require('./questions.controller');

var router = express.Router();

router.get('/LoadStats', controller.LoadStats);

router.get('/LoadMathStats', controller.LoadMathStats);

router.get('/LoadGrammarStats', controller.LoadGrammarStats);

router.get('/MathQuestions', controller.MathQuestions);

router.get('/GrammarQuestions', controller.GrammarQuestions);

router.get('/SaveMathProgress', controller.SaveMathProgress);

router.get('/SaveGrammarProgress', controller.SaveGrammarProgress);

module.exports = router;
