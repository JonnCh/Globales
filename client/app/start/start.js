'use strict';

angular.module('globalesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('start', {
        url: '/start',
        views: {
            'main-content': {
                 templateUrl: 'app/start/start.html',
                 controller: 'StartCtrl'
             }
        }
      });
  });
