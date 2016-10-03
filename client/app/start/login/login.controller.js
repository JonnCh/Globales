'use strict';

angular.module('globalesApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.login = function(){
      alert('login');
    };
  });
