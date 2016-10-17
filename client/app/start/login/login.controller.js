'use strict';

angular.module('globalesApp')
.controller('LoginCtrl', function ($scope, $http, $window,$mdDialog) {
  $scope.UserName;
  $scope.Password;
  var showAlert = function(text) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title(text)
        .ok('OK')
    );
  };
  $scope.login = function(){
    $http.get("/api/auth/login?UserName="+$scope.UserName+"&Password="+$scope.Password).success(function(data){
      sessionStorage.setItem('userId', data);
      $window.location.href = '/dashboard';
    }).error(function(error){
      showAlert("Usuario o Contraseña incorrecta");
    });
  };
});
