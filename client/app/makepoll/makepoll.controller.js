'use strict';

angular.module('workspaceApp')
  .controller('MakepollCtrl', function($scope){
    $scope.message = 'Hello';
  })
  .controller('PieCtrl', function($scope){
    
    $scope.poll = {
      topic: "What is your favorite ocean?",
      labels: ['Pacific', 'Atlantic', 'Indian'],
      data: [81, 56, 55]
      
    };
    $scope.options = ['Pacific','Atlantic'];
    
    //Initial poll values
    $scope.labels = [];
    $scope.data = [1,1];
    $scope.topic = '';
    
    $scope.increaseData = function(){
      $scope.data[0]++;
    };
    
    $scope.addOption = function(){
      $scope.options.push('Option' + ($scope.options.length + 1));
      $scope.data.push(1);
    };
    
    $scope.addLabels = function(){
      $scope.labels.push($scope.labels.length);
      $scope.data.push(0);
    };
    
    $scope.submitPoll = function(){
      $scope.poll.topic = $scope.topic;
      $scope.poll.data = $scope.data;
      $scope.poll.labels = $scope.labels;
      console.log($scope.data,$scope.labels);
    }
  });