'use strict';

var _ = require('lodash');

var customMySQL = require('../Database/db');

// Get list of auths
exports.login = function(req, res) {
  if(req.query.UserName && req.query.Password){
      customMySQL.login(req.query.UserName, req.query.Password, function(data){
        if(data == 1){
            customMySQL.getUserId(req.query.UserName, req.query.Password, function(data){
                if(data!=-1){
                  res.json(data);
                }else{
                    res.status(401).send('ERROR');
                }
            });
        }else{
            res.status(401).send('ERROR');
        }
      });
    }else{
      res.status(401).send('ERROR');
    }
};

exports.singup = function(req, res) {
  if(req.query.Name && req.query.UserName && req.query.Password){
      customMySQL.singup(req.query.Name,req.query.UserName,req.query.Password, function(data){
        if(data == true){
            res.status(200).send('OK');
        }else{
            res.status(500).send('ERROR');
        }
      });
    }else{
      res.status(401).send('ERROR');
    }
};
