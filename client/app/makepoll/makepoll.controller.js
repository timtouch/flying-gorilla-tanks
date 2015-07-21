'use strict';

angular.module('workspaceApp')
  .controller('MakepollCtrl', function ($scope) {
    $scope.message = 'Hello';
  })
  .controller('BarCtrl', function($scope){
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A'];
    $scope.data = [[65, 59, 80, 81, 56, 55, 40]];
    
    $scope.increaseData = function(){
      $scope.data[0][0]++;
    };
  });
