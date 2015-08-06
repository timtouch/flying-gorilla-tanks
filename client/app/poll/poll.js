'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/poll', {
        templateUrl: 'app/main/main.html',
        controller: 'PollCtrl',
        authenticate: true
      })
      .when('/poll/:id', {
        templateUrl: 'app/poll/poll.html',
        controller: 'PollCtrl',
        authenticate: true
      });
  });
