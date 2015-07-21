'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/makepoll', {
        templateUrl: 'app/makepoll/makepoll.html',
        controller: 'MakepollCtrl'
      });
  });
