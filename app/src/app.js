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
  var TestService = require('./service/TestService');

  /*===CONTROLLERS===*/
  var TestController = require('./section/test/controller/TestController');
  var ProductListController = require('./section/productList/controller/ProductListController');

  /*===DIRECTIVES===*/
  var TestComponent = require('./component/TestComponent');

  angular.module('AngularCommonApp', ['ngRoute', 'ngCookies'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/test', {
        templateUrl : './src/section/test/partial/test.html',
        controller : 'TestController'
      })
      .when('/productList', {
        templateUrl : './src/section/productList/partial/productList.html',
        controller : 'ProductListController'
      })
      .otherwise({
        redirectTo: '/'
    });
  }])
  .controller('TestController', ['$scope', '$http', '$cookieStore', TestController])
  .factory('TestService', ['$http', TestService])
  .directive('TestComponent', [TestComponent]);

})();