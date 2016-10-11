'use strict';

var _ = require('lodash');

var customMySQL = require('../Database/db');

// Get list of auths
exports.login = function(req, res) {
  if(req.query.UserName && req.query.Password){
      customMySQL.login(req.query.UserName, req.query.Password, function(data){
            console.log(data);
        if(data == 1){
            res.status(200).send('OK');
        }else{
            res.status(401).send('ERROR');
        }
      });
    }else{
      res.status(401).send('ERROR');
    }
};
