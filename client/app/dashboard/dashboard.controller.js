'use strict';

angular.module('globalesApp')
  .controller('DashboardCtrl', function ($scope, $mdSidenav) {

    $scope.toggleLeft = buildToggler('left');

   function buildToggler(componentId) {
     return function() {
       $mdSidenav(componentId).toggle();
     }
   }
  });
