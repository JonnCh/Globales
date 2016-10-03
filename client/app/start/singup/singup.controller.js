'use strict';

angular.module('globalesApp')
  .controller('SingupCtrl', function ($scope) {
    $scope.user = {};
    $scope.user.Name = 'Juan';
    $scope.singup = function(){
      alert('registro');
    }
  });
