'use strict';

angular.module('globalesApp')
.controller('QuestionsCtrl', function ($scope, $stateParams, $http, $mdDialog) {
  $scope.theme = $stateParams.theme;
  $scope.questions = [];
  $scope.currentQuestionIndex = 0;
  $scope.currentQuestion;
  $scope.currentAnswer;

  $scope.userId =1;

  var loadQuestions = function(){
    $http.get("/api/questions/MathQuestions?UserId="+$scope.userId)
		      	.then(
		        function success(response){
		        	$scope.questions = response.data;
              $scope.currentQuestion = 	$scope.questions[$scope.currentQuestionIndex];
		        },
		        function error(data, status){
		          console.log("error: "+status);
		        }
      		);
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
        $scope.questions ={};
        $scope.currentQuestion ={};
      }
    }else{
      showAlert('Respuestas Incorrecta');
    }
  }

  loadQuestions();
});
