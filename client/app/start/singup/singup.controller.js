'use strict';

angular.module('globalesApp')
  .controller('SingupCtrl', function ($scope, $http, $mdDialog, $window) {

    var showAlert = function(text) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title(text)
          .ok('OK')
      );
    };

    $scope.Name;
    $scope.UserName;
    $scope.Password;
    $scope.singup = function(){
      $http.get("/api/auth/singup?Name="+$scope.Name+"&UserName="+$scope.UserName+"&Password="+$scope.Password).success(function(data){
        $window.location.href = '/start/login';
      }).error(function(error){
        showAlert("Error al registrar el usuario. Puede que el nombre de usuario ya esté siendo utilizado pruebe con uno nuevo.");
      });
    }
  });
