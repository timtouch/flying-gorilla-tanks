'use strict';

angular.module('workspaceApp')
  .controller('MakepollCtrl', function($scope, $http){
    $scope.polls = [];
    $scope.options = ['Pacific','Atlantic'];
    
    
    //Initial poll values
    $scope.poll = {
      voters_id: []
    };
    $scope.labels = [];
    $scope.data = [0,0];
    $scope.topic = '';
    $scope.hasMadePoll = false;
    

    $http.get('/api/users/me').success(function(currUser){
      $scope.poll.owner_id = currUser._id;
    });
    
    $http.get('/api/polls').success(function(polls) {
      $scope.polls = polls;
    });
    
    $scope.addPoll = function() {
      if($scope.poll === {}) {
        return;
      }
      $http.post('/api/polls', $scope.poll).success(function(addedPoll){
        $scope.poll = addedPoll;
      });
    };
    
    $scope.addOption = function(){
      $scope.options.push('Option ' + ($scope.options.length + 1));
      $scope.data.push(0);
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