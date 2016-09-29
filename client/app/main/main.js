'use strict';

angular.module('globalesApp')
.config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        views: {
            'main-content': {
              templateUrl: 'app/main/main.html',
              controller: 'MainCtrl'
             }
        }
      });
  });
