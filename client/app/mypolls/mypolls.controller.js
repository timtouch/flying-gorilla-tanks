'use strict';

angular.module('workspaceApp')
  .controller('MypollsCtrl', function ($scope, $http) {
    $scope.polls = [];
    $scope.hasMadeGraph = false;
    //Get all of current user's polls
    
    
    $http.get('/api/users/me').success(function(currUser){
      //console.log(currUser._id);
      $http.get('api/polls/user/' + currUser._id).success(function(userPolls){
        $scope.polls = userPolls;
        //console.log("User polls: " + $scope.polls);
      });
    });
    
    $scope.removePoll = function(poll){
      $http.delete('/api/polls/' + poll._id);
      $scope.polls.splice($scope.polls.indexOf(poll),1);
    };
  });
