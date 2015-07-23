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
    
    $scope.choosenOption = {};
    
    //Initial poll values
    $scope.labels = [];
    $scope.data = [1,1];
    $scope.topic = '';
    $scope.hasMadePoll = false;
    
    
    
    $scope.increaseData = function(){
      $scope.data[0]++;
    };
    
    $scope.addOption = function(){
      $scope.options.push('Option ' + ($scope.options.length + 1));
      $scope.data.push(1);
    };
    
    $scope.choosen = function(){
      console.log("The option you choose is " + $scope.choosenOption.opt);
      var indexOfOption = $scope.poll.labels.indexOf($scope.choosenOption.opt);
      $scope.poll.data[indexOfOption]++;
    };
    
    
    $scope.submitPoll = function(){
      $scope.poll.topic = $scope.topic;
      $scope.poll.data = $scope.data;
      $scope.poll.labels = $scope.labels;
      $scope.hasMadePoll = true;
      
      $scope.labels = [];
      $scope.data = [1,1];
      $scope.topic = '';
    };
  });