'use strict';

var _ = require('lodash');


var customMySQL = require('../Database/db');

exports.LoadStats = function(req, res) {
  customMySQL.LoadStats(req.query.UserId,function(data){
    res.json(data);
  });
};
exports.LoadMathStats = function(req, res) {
  customMySQL.LoadMathStats(req.query.UserId,function(data){
    res.json(data);
  });
};
exports.LoadGrammarStats = function(req, res) {
  customMySQL.LoadGrammarStats(req.query.UserId,function(data){
    res.json(data);
  });
};
exports.SaveMathProgress = function(req, res) {
  customMySQL.SaveMathProgress(req.query.UserId,req.query.CorrectAnswers,req.query.IncorrectAnswers,req.query.QuestionIndex,function(data){
    res.json(data);
  });
};
exports.SaveGrammarProgress = function(req, res) {
  customMySQL.SaveGrammarProgress(req.query.UserId,req.query.CorrectAnswers,req.query.IncorrectAnswers,req.query.QuestionIndex,function(data){
    res.json(data);
  });
};

exports.MathQuestions = function(req, res) {
  customMySQL.userMathQuestions(req.query.UserId,function(data){
    res.json(data);
  });
};

exports.GrammarQuestions = function(req, res) {
  customMySQL.userGrammarQuestions(req.query.UserId,function(data){
    res.json(data);
  });
};
