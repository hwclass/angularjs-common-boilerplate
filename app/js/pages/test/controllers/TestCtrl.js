
/*Services*/
var TestService = require('../../../services/TestService');
var testUtility = require('../../../utilities/test');
/*Services*/

var TestCtrl = function($scope, $http) {

  'use strict';

  $scope.title = 'Weather';

  TestService($http).getWeather('Istanbul', 'tr', function(data) {
  	console.dir(data);
  	$scope.name = data.name;
  	$scope.description = data.weather[0]['description'];
  });

  console.log(testUtility.isNull('takinardi'));

};

module.exports = TestCtrl;