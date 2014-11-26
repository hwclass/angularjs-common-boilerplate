/*
 * Main app initializer for the whole app as a mediator
*/

(function () {

  'use strict';

  /*===MODULES===*/
  require('angular');
  require('angular-route');
  require('angular-animate');
  require('angular-module-cookies');

  /*===SERVICES===*/
  var testService = require('./service/Test');

  /*===CONTROLLERS===*/
  var testCtrl = require('./section/test/controller/test');

  /*===DIRECTIVES===*/
  var testComponent = require('./component/test');

  angular.module('AngularCommonApp', ['ngRoute', 'ngCookies'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/test', {
        templateUrl : './js/section/test/partial/test.html',
        controller : 'testCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }])
  .controller('testCtrl', ['$scope', '$http', '$cookieStore', testCtrl])
  .factory('testService', ['$http', testService])
  .directive('testComponent', [testComponent]);

})();