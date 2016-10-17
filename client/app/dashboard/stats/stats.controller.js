'use strict';

angular.module('globalesApp')
  .controller('StatsCtrl', function ($scope,$window,$http) {
    $scope.UserId;
    $scope.UserName;
    $scope.MathCorrectAnswers =0;
    $scope.MathIncorrectAnswers =0;
    $scope.GrammarCorrectAnswers =0;
    $scope.GrammarIncorrectAnswers =0;


    var isUserLoggedin = function () {
      if($window.sessionStorage.userId === undefined || $window.sessionStorage.userId === 'undefined' || $window.sessionStorage.userId === '' || $window.sessionStorage.userId == ''){
        window.location.href='/start/login';
      }
      else{
        $scope.UserId =$window.sessionStorage.userId;
        loadStats();
      }
    };

    var loadStats =function(){
        $http.get("/api/questions/LoadStats?UserId="+$scope.UserId)
        .then(
          function success(response){
            $scope.UserName =response.data.UserName;
            $scope.MathCorrectAnswers =response.data.MathCorrect;
            $scope.MathIncorrectAnswers =response.data.MathIncorrect;
            $scope.GrammarCorrectAnswers =response.data.GrammarCorrect;
            $scope.GrammarIncorrectAnswers =response.data.GrammarIncorrect;
          },
          function error(data, status){
            console.log("error: "+status);
          }
        );
    }

    isUserLoggedin();
  });
