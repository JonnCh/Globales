'use strict';

angular.module('globalesApp')
.controller('DashboardCtrl', function ($scope, $mdSidenav, $window) {

  $scope.UserId;

  var isUserLoggedin = function () {
    if($window.sessionStorage.userId === undefined || $window.sessionStorage.userId === 'undefined' || $window.sessionStorage.userId === '' || $window.sessionStorage.userId == ''){
      window.location.href='/start/login';
    }
    else{
      $scope.UserId =$window.sessionStorage.userId;
    }
  };

  $scope.toggleLeft = buildToggler('left');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    }
  }

  isUserLoggedin();
});
