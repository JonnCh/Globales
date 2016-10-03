'use strict';

angular.module('globalesApp')
.config(function ($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      views: {
          'main-content@': {
               templateUrl: 'app/dashboard/dashboard.html',
               controller: 'DashboardCtrl'
           }
      }
    });
});
