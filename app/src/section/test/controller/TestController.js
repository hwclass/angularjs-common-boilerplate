'use strict';

/*===CONFIGS===*/
var UrlConfig = require('../../../config/UrlConfig');
var TestConfig = require('../../../config/TestConfig');

/*===MODELS===*/
var User = require('../../../model/User');

/*===PROVIDERS===*/
var UserServiceProvider = require('../../../provider/UserServiceProvider');

/*===SERVICES===*/
var TestService = require('../../../service/TestService');

/*===UTILITY===*/
var TestUtility = require('../../../utility/TestUtility');

/*===3RD PARTIES===*/
var $ = require('jquery');

/**
 * @name TestCtrl
 * @desc Test application controller
 */
var TestCtrl = function($scope, $http, $cookieStore) {

  'use strict';

  $scope.title = TestConfig.getTitle();

  $scope.cities = [];

  var cities = TestConfig.getCities();

  console.dir(cities);

  for (var cityCounter = 0, len = cities.length; cityCounter < len; cityCounter++) {
    TestService($http).getWeather(cities[cityCounter].city, cities[cityCounter].prefix, function(data) {
      console.dir(data);
      $scope.cities.push({name : data.name,  description : data.weather[0].description, icon : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"});
    });
  };

  console.log('TestUtility::Is testApp string value null ? :' + TestUtility.isNull('testApp'));
  console.log('TestUtility::Is testApp string value undefined ? :' + TestUtility.isUndefined('testApp'));

  $cookieStore.put('cat','tekir');

  var body = $('body');

  console.log(body);

  console.log('Login Url : ' + UrlConfig.getUserLoginUrl());

  console.dir(User);

  var testUser = new User('', '', 'John', 'Doe', 'World', '');

  console.log(testUser.name);
  console.log(testUser.surName);
  console.log(testUser.address);

  $scope.name = testUser.name;
  $scope.surName = testUser.surName;
  $scope.address = testUser.address;

  UserServiceProvider($http).testRequest(function (data) {
    if(!TestUtility.isNull(data) && !TestUtility.isUndefined(data)) {
      console.dir('user data : ' + data.name);
    };
  });

};

module.exports = TestCtrl;