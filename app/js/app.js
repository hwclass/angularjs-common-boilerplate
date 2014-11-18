'use strict';

var angular = require('angular');
 
var TestCtrl = require('./pages/test/controllers/TestCtrl');

var app = angular.module('testApp', []);

app.controller('TestCtrl', ['$scope', TestCtrl]);
