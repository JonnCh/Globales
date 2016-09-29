'use strict';

angular.module('globalesApp')
.config(function ($stateProvider) {
  $stateProvider
    .state('questions', {
      url: '/questions',
      parent: 'main',
      views: {
          'questions-content@main': {
               templateUrl: 'app/questions/questions.html',
               controller: 'QuestionsCtrl'
           }
      }
    });
});
