var mysql = require('mysql');

function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'globales'
  });
}

exports.userMathQuestions = function(User, callback){
  var conn = createConnection();
  conn.connect();
  var sql = "select questions.Id,questions.Question,questions.Option1,questions.Option2,questions.Option3,questions.Option4,questions.Answer from questions,users where questions.Id >=users.MathQuestionIndex && questions.Theme ='Math' && users.Id ="+User;
  console.log(sql);
  conn.query(sql,
    function (err, rows) {
      if(!err)
        return callback(rows);
      else
        console.log('Error ' + err);
    });
  conn.end();
}

exports.userGrammarQuestions = function(User ,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "select questions.Id,questions.Question,questions.Option1,questions.Option2,questions.Option3,questions.Option4,questions.Answer from questions,users where questions.Id >=users.GrammarQuestionIndex  && questions.Theme ='Grammar' && users.Id ="+User;
  conn.query(sql,
    function (err, rows) {
      if(!err)
          return callback(rows);
      else
        console.log('Error ' + err);
    });
  conn.end();
}
