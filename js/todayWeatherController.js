'use strict';

angular.module('examApp').
  controller('TodayWeatherCtrl', ['$scope', '$http',
    function ($scope, $http) {
      $scope.params = {'city': '', 'country': ''};
      $scope.init = function() {
        $scope.weather = {'main': '', 'description': ''};
        $scope.main = {'tempMin': 0, 'tempMax': 0, 'humidity': 0};
        $scope.message = '';
        $scope.loading = false;
        $scope.category = 'unknow';
      }

      $scope.search = function() {
        $scope.init();
        $scope.loading = true;
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' +
          $scope.params.city +
          ',' +
          $scope.params.country +
          '&units=metric&APPID={yourAPPID}').
          success(function(data, status, headers, config) {
            if (data.cod === 200) {
              $scope.weather.main = data.weather[0].main;
              $scope.weather.description = data.weather[0].description;
              $scope.main.tempMin = data.main.temp_min;
              $scope.main.tempMax = data.main.temp_max;
              $scope.main.humidity = data.main.humidity;
              if ($scope.weather.description.toLowerCase().indexOf('cloud') > -1) {
                $scope.category = 'cloud';
              } else if ($scope.weather.description.toLowerCase().indexOf('rain') > -1) {
                $scope.category = 'rain';
              } else if ($scope.weather.description.toLowerCase().indexOf('clear') > -1) {
                $scope.category = 'clear';
              }
            } else {
              $scope.message = data.message;
            }
            $scope.loading = false;
          }).
          error(function(data, status, headers, config) {
            $scope.message = data.message;
            $scope.loading = false;
          });
      };

      $scope.init();
    }
  ]);
