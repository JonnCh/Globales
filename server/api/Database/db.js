var mysql = require('mysql');

function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'globales'
  });
}

exports.LoadStats =function(UserId,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "SELECT UserName,MathCorrect,MathIncorrect,GrammarCorrect,GrammarIncorrect FROM users where id ="+UserId;
  conn.query(sql,
    function (err, rows) {
      if(!err){
        callback(rows[0]);
      }
      else{
        console.log('Error ' + err);
        callback(err);
      }
    });
    conn.end();
}

exports.LoadMathStats =function(UserId,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "select MathQuestionIndex,MathCorrect,MathIncorrect from users where id="+UserId;
  conn.query(sql,
    function (err, rows) {
      if(!err){
        callback(rows[0]);
      }
      else{
        console.log('Error ' + err);
        callback(err);
      }
    });
    conn.end();
}

exports.LoadGrammarStats =function(UserId,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "select GrammarQuestionIndex,GrammarCorrect,GrammarIncorrect from users where id="+UserId;
  conn.query(sql,
    function (err, rows) {
      if(!err){
        callback(rows[0]);
      }
      else{
        console.log('Error ' + err);
        callback(err);
      }
    });
    conn.end();
}

exports.SaveGrammarProgress =function(UserId,Correct,Incorrect,Index,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "UPDATE users SET GrammarQuestionIndex ="+Index+",GrammarCorrect= "+Correct+", GrammarIncorrect= "+Incorrect+" WHERE Id ="+UserId;
  conn.query(sql,
    function (err, rows) {
      if(!err){
        callback(rows[0]);
      }
      else{
        console.log('Error ' + err);
        callback(err);
      }
    });
    conn.end();
}

exports.SaveGrammarProgress =function(UserId,Correct,Incorrect,Index,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "UPDATE users SET GrammarQuestionIndex ="+Index+",GrammarCorrect= "+Correct+", GrammarIncorrect= "+Incorrect+" WHERE Id ="+UserId;
  conn.query(sql,
    function (err, rows) {
      if(!err){
        callback(rows[0]);
      }
      else{
        console.log('Error ' + err);
        callback(err);
      }
    });
    conn.end();
}

exports.SaveMathProgress =function(UserId,Correct,Incorrect,Index,callback){
  var conn = createConnection();
  conn.connect();
  var sql = "UPDATE users SET MathQuestionIndex ="+Index+",MathCorrect= "+Correct+", MathIncorrect= "+Incorrect+" WHERE Id ="+UserId;
  conn.query(sql,
    function (err, rows) {
      if(!err){
        callback(rows[0]);
      }
      else{
        console.log('Error ' + err);
        callback(err);
      }
    });
    conn.end();
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

      exports.singup = function(Name,UserName,Passw,callback){
        var conn = createConnection();
        conn.connect();
        var sql = "insert into users(Name,UserName,Password,MathQuestionIndex,GrammarQuestionIndex,MathCorrect,GrammarCorrect,MathIncorrect,GrammarIncorrect) values ('"+Name+"','"+UserName+"','"+Passw+"',0,0,0,0,0,0);";
        conn.query(sql,
          function (err, rows) {
            if(!err){
              callback(true);
            }
            else{
              console.log('Error ' + err);
              callback(false);
            }
          });
          conn.end();
        }
        exports.getUserId = function(UserName,Passw,callback){
          var conn = createConnection();
          conn.connect();
          var sql = "SELECT Id FROM users where UserName='"+UserName+"' and Password='"+Passw+"'";
          conn.query(sql,
            function (err, rows) {
              if(!err){
                callback(rows[0].Id);
              }
              else{
                console.log('Error ' + err);
                callback(-1);
              }
            });
            conn.end();
          }
