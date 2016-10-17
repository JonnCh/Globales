'use strict';

angular.module('globalesApp')
.controller('QuestionsCtrl', function ($scope, $stateParams, $http, $mdDialog, $window) {
  $scope.theme = $stateParams.theme;
  $scope.themeTitle = $scope.theme == 'Math'? "Práctica de Matematica":"Práctica de Gramatica";
  $scope.questions = [];
  $scope.showQuestions =false;
  $scope.currentQuestionIndex = 0;
  $scope.currentQuestion;
  $scope.currentAnswer;
  $scope.UserId;
  $scope.answerCount =0;
  $scope.CorrectAnswers =0;
  $scope.IncorrectAnswers =0;
  $scope.QuestionIndex =0;

  var isUserLoggedin = function () {
    if($window.sessionStorage.userId === undefined || $window.sessionStorage.userId === 'undefined' || $window.sessionStorage.userId === '' || $window.sessionStorage.userId == ''){
      window.location.href='/start/login';
    }
    else{
      $scope.UserId =$window.sessionStorage.userId;
      loadStats();
      loadQuestions();
    }
  };

  var loadStats =function(UserId){
    if($scope.theme == 'Math'){
      $http.get("/api/questions/LoadMathStats?UserId="+$scope.UserId)
      .then(
        function success(response){
          $scope.QuestionIndex =response.data.MathQuestionIndex;
          $scope.CorrectAnswers =response.data.MathCorrect;
          $scope.IncorrectAnswers =response.data.MathIncorrect;
        },
        function error(data, status){
          console.log("error: "+status);
        }
      );
    }
    else
    if($scope.theme == 'Grammar'){
      $http.get("/api/questions/LoadGrammarStats?UserId="+$scope.UserId)
      .then(
        function success(response){
          $scope.QuestionIndex =response.data.GrammarQuestionIndex;
          $scope.CorrectAnswers =response.data.GrammarCorrect;
          $scope.IncorrectAnswers =response.data.GrammarIncorrect;
        },
        function error(data, status){
          console.log("error: "+status);
        }
      );
    }
  }

  var loadQuestions = function(){
    if($scope.theme == 'Math'){
      $http.get("/api/questions/MathQuestions?UserId="+$scope.UserId)
      .then(
        function success(response){
          if(response.data.length>0){
            $scope.questions = response.data;
            $scope.currentQuestion = 	$scope.questions[$scope.currentQuestionIndex];
            $scope.showQuestions = true;
          }
        },
        function error(data, status){
          console.log("error: "+status);
        }
      );
    }
    else
    if($scope.theme == 'Grammar'){
      $http.get("/api/questions/GrammarQuestions?UserId="+$scope.UserId)
      .then(
        function success(response){
          if(response.data.length>0){
            $scope.questions = response.data;
            $scope.currentQuestion = 	$scope.questions[$scope.currentQuestionIndex];
            $scope.showQuestions = true;
          }
        },
        function error(data, status){
          console.log("error: "+status);
        }
      );
    }
  }
  var showAlert = function(text) {
    $mdDialog.show(
      $mdDialog.alert()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .clickOutsideToClose(true)
      .title(text)
      .ok('OK')
    );
  };

  $scope.answerCurrentQuestion= function(){
    if($scope.currentAnswer == $scope.currentQuestion.Answer){
      showAlert('Respuesta correcta');
      $scope.CorrectAnswers++;
      saveProgress();
      nextQuestion();
    }else{
      showAlert('Respuestas Incorrecta');
      $scope.answerCount++;
      $scope.IncorrectAnswers++;
      if($scope.answerCount==2){
        saveProgress();
        nextQuestion();
      }
    }
  }

  var saveProgress =function(){
    if($scope.theme == 'Math'){
      $http.get("/api/questions/SaveMathProgress?UserId="+$scope.UserId+"&CorrectAnswers="+$scope.CorrectAnswers+"&IncorrectAnswers="+$scope.IncorrectAnswers+"&QuestionIndex="+$scope.QuestionIndex)
      .then(function success(response){});
    }
    else
    if($scope.theme == 'Grammar'){
      $http.get("/api/questions/SaveGrammarProgress?UserId="+$scope.UserId+"&CorrectAnswers="+$scope.CorrectAnswers+"&IncorrectAnswers="+$scope.IncorrectAnswers+"&QuestionIndex="+$scope.QuestionIndex)
      .then(function success(response){});
    }
  }

  var nextQuestion= function(){
    $scope.answerCount =0;
    $scope.currentQuestionIndex++;
    if($scope.currentQuestionIndex < $scope.questions.length){
      $scope.currentQuestion =   $scope.questions[$scope.currentQuestionIndex];
      $scope.QuestionIndex =   $scope.currentQuestion.Id;
    }
    else {
      showAlert('práctica terminada');
      $scope.showQuestions = false;
      $scope.questions ={};
      $scope.currentQuestion ={};
    }
  }


  isUserLoggedin();
});
