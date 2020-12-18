'use strict';

angular.module('examApp').
  controller('DataAnalysisCtrl', ['$scope',
    function ($scope) {
      $scope.options = {
        chart: {
          type: 'lineChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 40,
            left: 55
          },
          x: function(d){ return d.x; },
          y: function(d){ return d.y; },
          useInteractiveGuideline: true,
          dispatch: {
            stateChange: function(e){ console.log("stateChange"); },
            changeState: function(e){ console.log("changeState"); },
            tooltipShow: function(e){ console.log("tooltipShow"); },
            tooltipHide: function(e){ console.log("tooltipHide"); }
          },
          xAxis: {
            axisLabel: ''
          },
          yAxis: {
            axisLabel: 'People',
            tickFormat: function(d){
              return (d / 1000) + 'k';
            },
            axisLabelDistance: -10
          },
          callback: function(chart){
            console.log("!!! lineChart callback !!!");
          }
        },
        title: {
          enable: true,
          text: 'Birth in Taiwan'
        },
        subtitle: {
          enable: true,
          text: 'Source: Ministry of the Interior',
          css: {
            'text-align': 'center',
            'margin': '10px 13px 0px 7px'
          }
        },
        caption: {
          enable: false,
          html:'',
          css: {
            'text-align': 'justify',
            'margin': '10px 13px 0px 7px'
          }
        }
      };

      $scope.data = [
        {
          values: [
            {x: 2007, y: 106898},
            {x: 2008, y: 103937},
            {x: 2009, y: 99492},
            {x: 2010, y: 87213},
            {x: 2011, y: 101943},
            {x: 2012, y: 118848},
            {x: 2013, y: 103120}
          ],      //values - represents the array of {x,y} data points
          key: 'Men', //key  - the name of the series.
          color: '#6d97cd'  //color - optional: choose your own line color.
        },
        {
          values: [
            {x: 2007, y: 97516},
            {x: 2008, y: 94796},
            {x: 2009, y: 91818},
            {x: 2010, y: 79673},
            {x: 2011, y: 94684},
            {x: 2012, y: 110633},
            {x: 2013, y: 95993}
          ],
          key: 'Female',
          color: '#42474d'
        }
      ];
    }
  ]);
