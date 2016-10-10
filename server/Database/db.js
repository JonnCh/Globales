var mysql = require('mysql');

function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'programathon2016'
  });
}

exports.userMathQuestions(User,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "select questions.Id,questions.Question,questions.Option1,questions.Option2,questions.Option3,questions.Option4,questions.Answer from questions,users where questions.Id >=users.MathQuestionIndex && questions.Theme ='Math' && users.Id ="+User;
  conn.query(sql,
    function (err, rows) {
      callback(data);
      else
      console.log('Error while performing Login.' + err);
    });
  conn.end();
}

exports.userGrammarQuestions(User,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "select questions.Id,questions.Question,questions.Option1,questions.Option2,questions.Option3,questions.Option4,questions.Answer from questions,users where questions.Id >=users.GrammarQuestionIndex  && questions.Theme ='Grammar' && users.Id ="+User;
  conn.query(sql,
    function (err, rows) {
      callback(data);
      else
      console.log('Error while performing Login.' + err);
    });
  conn.end();
}

exports.answers(Question){

}
