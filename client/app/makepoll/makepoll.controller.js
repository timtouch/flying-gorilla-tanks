'use strict';

angular.module('workspaceApp')
  .controller('MakepollCtrl', function($scope, $http){
    
    $scope.polls = [];
    $scope.poll = {};
    
    $scope.options = ['Pacific','Atlantic'];
    
    $scope.choosenOption = {};
    
    //Initial poll values
    $scope.labels = [];
    $scope.data = [0,0];
    $scope.topic = '';
    $scope.hasMadePoll = false;
    $scope.hasMadeGraph = false;

    
    $http.get('/api/polls').success(function(polls) {
      $scope.polls = polls;
      console.log(polls);
    });
    
    $scope.addPoll = function() {
      if($scope.poll === {}) {
        return;
      }
      $http.post('/api/polls', $scope.poll);
    };
    /*
    $scope.deleteThing = function(poll) {
      $http.delete('/api/polls/' + poll._id);
    };
    */
    
    $scope.addOption = function(){
      $scope.options.push('Option ' + ($scope.options.length + 1));
      $scope.data.push(0);
    };
    
    $scope.choosen = function(){
      $scope.hasMadeGraph = true;
      console.log("The option you choose is " + $scope.choosenOption.opt);
      var indexOfOption = $scope.poll.labels.indexOf($scope.choosenOption.opt);
      $scope.poll.data[indexOfOption]++;
      console.log($scope.poll.data);
    };
    
    $scope.reset = function(){
      $scope.labels = [];
      $scope.data = [0,0];
      $scope.topic = '';
    };
    
    $scope.submitPoll = function(){
      $scope.poll.topic = $scope.topic;
      $scope.poll.data = $scope.data;
      $scope.poll.labels = $scope.labels;
      $scope.hasMadePoll = true;
      
      $scope.addPoll();
      
      $scope.reset();
    };
  });