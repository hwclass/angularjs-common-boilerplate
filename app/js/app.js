(function () {

	'use strict';

	/*includes*/
	require('angular');
	require('angular-route');
	require('angular-animate');

	/*Services*/
	var TestService = require('./services/TestService');
	/*Services*/

	/*Controllers*/
	var TestCtrl = require('./pages/test/controllers/TestCtrl');
	/*Controllers*/

	angular.module('testApp', ['ngRoute'])
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
		.controller('TestCtrl', ['$scope', '$http', TestCtrl])
		.factory('TestService', ['$http', TestService]);

})();
