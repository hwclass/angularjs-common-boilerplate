(function () {

  'use strict';

  /*includes*/
  require('angular');
  require('angular-route');
  require('angular-animate');
  require('angular-module-cookies');
  /*includes*/

  /*Services*/
  var TestService = require('./services/TestService');
  /*Services*/

  /*Controllers*/
  var TestCtrl = require('./pages/test/controllers/TestCtrl');
  /*Controllers*/

  angular.module('testApp', ['ngRoute', 'ngCookies'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/test', {
      templateUrl : './js/pages/test/partials/test.html',
      controller : 'TestCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }])
  .controller('TestCtrl', ['$scope', '$http', '$cookieStore', TestCtrl])
  .factory('TestService', ['$http', TestService]);

})();
