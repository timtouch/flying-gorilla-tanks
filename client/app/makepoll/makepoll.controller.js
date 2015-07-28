'use strict';

angular.module('workspaceApp')
  .controller('MakepollCtrl', function($scope, $http){
    
    $scope.polls = [];
    $scope.poll = {
      voters_id: []
    };
    
    $scope.options = ['Pacific','Atlantic'];
    
    $scope.choosenOption = {};
    
    //Initial poll values
    $scope.labels = [];
    $scope.data = [0,0];
    $scope.topic = '';
    $scope.hasMadePoll = false;
    $scope.hasMadeGraph = false;

    $http.get('/api/users/me').success(function(currUser){
      $scope.poll.owner_id = currUser._id;
      console.log($scope.poll.owner_id);
    }); 
    
    $http.get('/api/polls').success(function(polls) {
      $scope.polls = polls;
      console.log(polls);
    });
    
    $scope.addPoll = function() {
      if($scope.poll === {}) {
        return;
      }
      $http.post('/api/polls', $scope.poll).success(function(addedPoll){
        $scope.poll = addedPoll;
        console.log("Added Poll is: " + $scope.poll + " and _id is: " + $scope.poll._id);
      });
    };
    
    $scope.addOption = function(){
      $scope.options.push('Option ' + ($scope.options.length + 1));
      $scope.data.push(0);
    };
    
    $scope.choosen = function(){
      $scope.hasMadeGraph = true;
      var indexOfOption = $scope.poll.labels.indexOf($scope.choosenOption.opt);
      
      $scope.poll.data[indexOfOption]++;
      $scope.poll.voters_id.push($scope.poll.owner_id);
      console.log("The voters are " + $scope.poll.voters_id);
      console.log($scope.poll);
      $http.put('/api/polls/' + $scope.poll._id, $scope.poll);
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