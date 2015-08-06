'use strict';

angular.module('workspaceApp')
  .controller('PollCtrl', function ($scope, $http, $routeParams) {
    $scope.poll = {};
    $scope.hasVoted = false;
    $scope.choosenOption = {};
    $scope.voter_id = '';
    
    
    $http.get('/api/users/me').success(function(currUser){
      $scope.voter_id = currUser._id;
      //console.log($scope.voter_id);
      
      $http.get('/api/polls/' + $routeParams.id).success(function(poll){
        $scope.poll = poll;
        //console.log($scope.poll);
        //Has user already voted on this poll?
        if( $scope.poll.voters_id.indexOf($scope.voter_id) != -1){
          $scope.hasVoted = true;
        }
      });
    });
    
    
    
    $scope.choosen = function(){
      $scope.hasVoted = true;
      var indexOfOption = $scope.poll.labels.indexOf($scope.choosenOption.opt);
      $scope.poll.data[indexOfOption] += 1;
      $scope.poll.voters_id.push($scope.voter_id);
      
      //Update the poll
      $http.put('/api/polls/' + $scope.poll._id, $scope.poll);
    };
  });
