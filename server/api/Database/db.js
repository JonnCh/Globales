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
  var sql = "select questions.Id,questions.Question,questions.Option1,questions.Option2,questions.Option3,questions.Option4,questions.Option5,questions.Answer from questions,users where questions.Id >=users.MathQuestionIndex && questions.Theme ='Math' && users.Id ="+User;
  conn.query(sql,
    function (err, rows) {
      if(!err){
        callback(rows);
      }
      else{
        console.log('Error ' + err);
        callback(false);
      }
    });
    conn.end();
  }

  exports.userGrammarQuestions = function(User ,callback){
    var conn = createConnection();
    conn.connect();
    var sql = "select questions.Id,questions.Question,questions.Option1,questions.Option2,questions.Option3,questions.Option4,questions.Option5,questions.Answer from questions,users where questions.Id >=users.GrammarQuestionIndex  && questions.Theme ='Grammar' && users.Id ="+User;
    conn.query(sql,
      function (err, rows) {
        if(!err){
          callback(rows);
        }
        else{
          console.log('Error ' + err);
          callback(false);
        }
      });
      conn.end();
    }

    exports.login = function(UserName,Pass,callback){
      var conn = createConnection();
      conn.connect();
      var sql = "select exists(select * from users where users.UserName ='"+UserName+"' and users.Password ='"+Pass+"') as valid";
      conn.query(sql,
        function (err, rows) {
          if(!err){
            callback(rows[0].valid);
          }
          else{
            console.log('Error ' + err);
            callback(false);
          }
        });
        conn.end();
      }
