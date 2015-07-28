'use strict';

angular.module('workspaceApp')
  .directive('polldisplay', function () {
    return {
      templateUrl: 'app/polldisplay/polldisplay.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });