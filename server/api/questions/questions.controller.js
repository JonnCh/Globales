'use strict';

var _ = require('lodash');


var customMySQL = require('../Database/db');

// Get list of questionss
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
