'use strict';

/*includes*/
require('angular');
require('angular-route');

/*controllers*/
var TestCtrl = require('./pages/test/controllers/TestCtrl');

angular.module('testApp', ['ngRoute'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$routeProvider
			when('/', {
				templateUrl : '',
				controller : 'TestCtrl'
			});
	}])
	.controller('TestCtrl', ['$scope', TestCtrl]);
