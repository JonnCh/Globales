'use strict';

angular.module('globalesApp')
.config(function ($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      parent: 'start',
      views: {
        'start-content@start': {
          templateUrl: 'app/start/login/login.html',
          controller: 'LoginCtrl'
        }
      }
    });
});
