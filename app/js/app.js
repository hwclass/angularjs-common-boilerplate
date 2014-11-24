// Copyright 2014 Markafoni. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Generic builder class to build and modify DOM elements.
 */

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

  /*Directives*/
  var Test = require('./components/Test');
  /*Directives*/

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
  .factory('TestService', ['$http', TestService])
  .directive('test', [Test]);

})();