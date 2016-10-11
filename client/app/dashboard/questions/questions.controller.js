'use strict';

angular.module('globalesApp')
.controller('QuestionsCtrl', function ($scope, $stateParams, $http, $mdDialog) {
  $scope.theme = $stateParams.theme;
  $scope.themeTitle = $scope.theme == 'Math'? "Práctica de Matematica":"Práctica de Gramatica";
  $scope.questions = [];
  $scope.showQuestions =false;
  $scope.currentQuestionIndex = 0;
  $scope.currentQuestion;
  $scope.currentAnswer;

  $scope.userId =1;

  var loadQuestions = function(){
    if($scope.theme == 'Math'){
      $http.get("/api/questions/MathQuestions?UserId="+$scope.userId)
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
      $http.get("/api/questions/GrammarQuestions?UserId="+$scope.userId)
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
      $scope.currentQuestionIndex++;
      if($scope.currentQuestionIndex < $scope.questions.length){
        $scope.currentQuestion =   $scope.questions[$scope.currentQuestionIndex];
      }
      else {
        showAlert('práctica terminada');
        $scope.showQuestions = false;
        $scope.questions ={};
        $scope.currentQuestion ={};
      }
    }else{
      showAlert('Respuestas Incorrecta');
    }
  }

  loadQuestions();
});
