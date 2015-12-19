'use strict';

angular.module('hrr10MjbeApp')
  .controller('ClassprogressCtrl', function ($scope, $stateParams, Teacher) {
    $scope.message = 'Hello';
    Teacher.getClass($stateParams.id, function(theClass) {
      $scope.name = theClass.name;
      $scope.data = theClass.students;
      console.log($scope.data);
      console.log(theClass);
    })
  });
