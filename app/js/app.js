(function () {

	'use strict';

	/*includes*/
	require('angular');
	require('angular-route');
	require('angular-animate');

	var TestCtrl = require('./pages/test/controllers/TestCtrl');

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
		.controller('TestCtrl', ['$scope', TestCtrl]);

})();
