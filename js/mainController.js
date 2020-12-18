'use strict';

angular.module('examApp').
  controller('MainCtrl', ['$scope', '$location', '$route',
    function ($scope, $location, $route) {
      $scope.isActive = function(route) {
        return $location.path() === route;
      };
    }
  ]);
