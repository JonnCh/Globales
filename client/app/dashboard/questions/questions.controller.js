'use strict';

angular.module('globalesApp')
.controller('QuestionsCtrl', function ($scope, $stateParams) {
  $scope.theme = $stateParams.theme;
  $scope.questions=[
    {
      "question":" 1 + 1 ?",
      "options":[1,2,3,4],
      "answer":2
    },
    {
      "question":" 2 + 2 ?",
      "options":[2,3,4,5],
      "answer":4
    },
    {
      "question":" 3 + 3 ?",
      "options":[5,6,9,8],
      "answer":8
    }
  ];
  $scope.currentQuestionIndex = 0;
  $scope.currentQuestion =   $scope.questions[$scope.currentQuestionIndex];
  $scope.currentAnswer;

  $scope.answerCurrentQuestion= function(){
    if($scope.currentAnswer == $scope.currentQuestion.answer){
      alert('Respuesta correcta');
    }else{
      alert('Respuestas Incorrecta');
    }
    $scope.currentQuestionIndex++;
    if($scope.currentQuestionIndex < $scope.questions.length){
      $scope.currentQuestion =   $scope.questions[$scope.currentQuestionIndex];
    }
    else {
      alert('práctica terminada');
    }
  }
});
