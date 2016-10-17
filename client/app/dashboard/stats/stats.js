'use strict';

angular.module('globalesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stats', {
        url: '/stats',
        parent: 'dashboard',
        views: {
            'dashboard-content@dashboard': {
                 templateUrl: 'app/dashboard/stats/stats.html',
                 controller: 'StatsCtrl'
             }
        }
      });
  });
