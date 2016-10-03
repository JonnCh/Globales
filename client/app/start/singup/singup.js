'use strict';

angular.module('globalesApp')
.config(function ($stateProvider) {
  $stateProvider
    .state('singup', {
      url: '/singup',
      parent: 'start',
      views: {
          'start-content@start': {
               templateUrl: 'app/start/singup/singup.html',
               controller: 'SingupCtrl'
           }
      }
    });
});
