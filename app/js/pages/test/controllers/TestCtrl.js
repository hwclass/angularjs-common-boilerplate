
/*Services*/
var TestService = require('../../../services/TestService');
var testUtility = require('../../../utilities/test');
/*Services*/

var TestCtrl = function($scope, $http) {

  'use strict';

  $scope.testVar = 'We are up and running from a required module!';

  console.dir(TestService($http, function(data) {
  	console.dir(data);
  }));

  console.log(testUtility.isNull('takinardi'));

};

module.exports = TestCtrl;