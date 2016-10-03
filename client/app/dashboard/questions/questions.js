'use strict';

angular.module('globalesApp')
.config(function ($stateProvider) {
  $stateProvider
    .state('questions', {
      url: '/:questions?theme',
      parent: 'dashboard',
      views: {
          'dashboard-content@dashboard': {
               templateUrl: 'app/dashboard/questions/questions.html',
               controller: 'QuestionsCtrl'
           }
      }
    });
});
