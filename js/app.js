// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('testGet', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});

/*
var demoApp = angular.module('testGet', ['ionic']);
demoApp.controller('listController', function ($scope) {

  $scope.items = [
  {fname: 'Raj', lname: 'Bannerjee', uname: 'Zaire'},
  {fname: 'Prasun', lname: 'Bannerjee', uname: 'Udaipur'},
  {fname: 'Raj', lname: 'Malhotra', uname: 'Dubai'},
  {fname: 'Prasun', lname: 'Joshi', uname: 'Mumbai'}
  ];
    
})
*/

var demoApp = angular.module('testGet', ['ionic']);


demoApp.controller('listController', function ($scope, $http) {

    $scope.items = [];
    $scope.getItems = function() {

        $http({method : 'GET',url : 'https://api.parse.com/1/classes/data', headers: { 'X-Parse-Application-Id':'3j5xARkEQIGkaLLJVcXicXiBESx5a3oCraGDGvoJ', 'X-Parse-REST-API-Key':'4e2BBLaRLgF9KbBE44uWn3dicqUGIfFZUC9jm4Uj'}})
            .success(function(data, status) {
                $scope.items = data;
                 $scope.$broadcast("scroll.refreshComplete");

            })
            .error(function(data, status) {
                alert("Error");
            });
    };

  })


/*
demoApp.service('Get', ['$http','$scope',Get])

demoApp.controller('listController', ['$scope','$log',listController]);

function listController ($scope,$log)
{

  $scope.getItems = function ()
  {
    alert("button pressed");

  }
}


function Get ($http, $scope, listController){

        $scope.items = [];

        $scope.getItems = function() {
         $http({method : 'GET',url : 'https://api.parse.com/1/classes/data', headers: { 'X-Parse-Application-Id':'3j5xARkEQIGkaLLJVcXicXiBESx5a3oCraGDGvoJ', 'X-Parse-REST-API-Key':'4e2BBLaRLgF9KbBE44uWn3dicqUGIfFZUC9jm4Uj'}})
            .success(function(data, status) {
                $scope.items = data;
             })
            .error(function(data, status) {
                alert("Error");
            )}
        }


}
*/


/*

var demoApp = angular.module('testGet', ['ionic']);
demoApp.controller('listController', function ($scope, $http)
 {
        $scope.items = []

        $scope.getItems = function() {
         $http({method : 'GET',url : 'https://api.parse.com/1/classes/data', headers: { 'X-Parse-Application-Id':'3j5xARkEQIGkaLLJVcXicXiBESx5a3oCraGDGvoJ', 'X-Parse-REST-API-Key':'4e2BBLaRLgF9KbBE44uWn3dicqUGIfFZUC9jm4Uj'}})
            .success(function(data, status) {
                $scope.items = data;
             })
            .error(function(data, status) {
                alert("Error");
            )}
        }
    }

*/