'use strict';

angular.module('examApp').
  config(['$locationProvider' ,'$routeProvider', '$ocLazyLoadProvider',
    function config($locationProvider, $routeProvider, $ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
        debug: true
      });

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/analysis', {
          templateUrl: 'template/dataAnalysis.html',
          controller: 'DataAnalysisCtrl',
          resolve: {
            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([{
                name: 'analysisLoad',
                files: ['js/dataAnalysisController.js', 'css/dataAnalysisStyle.css']
              }]);
            }]
          }
        }).
        when('/weather', {
          templateUrl: 'template/todayWeather.html',
          controller: 'TodayWeatherCtrl',
          resolve: {
            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([{
                name: 'weatherLoad',
                files: ['js/todayWeatherController.js', 'css/todayWeatherStyle.css']
              }]);
            }]
          }
        }).
        otherwise({
          redirectTo: '/'
        });
    }
  ]);
