
/*Services*/
var TestConfig = require('../../../configs/TestConfig');
var TestService = require('../../../services/TestService');
var TestUtility = require('../../../utilities/TestUtility');
/*Services*/

var TestCtrl = function($scope, $http, $cookieStore) {

  'use strict';

  $scope.title = 'Weather Situations in the Cities';

  $scope.cities = [];

  var cities = TestConfig.getCities();

  console.dir(cities);

  for (var cityCounter = 0, len = cities.length; cityCounter < len; cityCounter++) {
    TestService($http).getWeather(cities[cityCounter].city, cities[cityCounter].prefix, function(data) {
      console.dir(data);
      $scope.cities.push({name : data.name,  description : data.weather[0].description, icon : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"});
    });
  }

  console.log('TestUtility::Is takinardi value null ? :' + TestUtility.isNull('takinardi'));
  console.log('TestUtility::Is takinardi value undefined ? :' + TestUtility.isUndefined('takinardi'));

  /*set cookies*/
  $cookieStore.put('cat','tekir');

};

module.exports = TestCtrl;