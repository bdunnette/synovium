'use strict';

angular.module('synoviumApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    //For an Aperio server, tile URL will be something like: http://images.pathology.umn.edu/imageserver/Conferences/Residents/SurgUnknowns/2014-01-23/55687.svs?x+y+256+256+z
    var tilesDict = {
        two: {
            url: "http://images.pathology.umn.edu/imageserver/Conferences/Residents/SurgUnknowns/2014-01-23/55687.svs?{x}+{y}+256+256+{z}",
        },
        one: {
            url: "http://images.pathology.umn.edu/imageserver/Conferences/Residents/SurgUnknowns/2014-01-23/55686.svs?{x}+{y}+256+256+{z}",
        }
    };
      
    angular.extend($scope, {
        tiles:{
            url: "http://images.pathology.umn.edu/imageserver/Conferences/Residents/SurgUnknowns/2014-01-23/55687.svs?{x}+{y}+256+256+{z}",
        },
    });
  });
