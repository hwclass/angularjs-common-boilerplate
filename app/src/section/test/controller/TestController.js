'use strict';

/*===CONFIGS===*/
var UrlConfig = require('../../../config/UrlConfig');
var TestConfig = require('../../../config/TestConfig');

/*===MODELS===*/
var User = require('../../../model/User');
var UserRequest = require('../../../model/UserRequest');
var UserSession = require('../../../model/UserSession');

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

  var currentUser = null,
      userRequest = null,
      currentUserSession = null,
      userSession = null;

  var buildUserDatToLogUserIn = function () {
    currentUser = new User('test@test.com', 'test123', 'John', 'Doe', 'Yukarı Ayrancı No:2', '1655433213');
    userRequest = new UserRequest(currentUser.getUserName(), currentUser.getPassWord(), currentUser.getBasketId());
  }

  /*Connect to UserService over UserServiceProvider to log the user in*/
  UserServiceProvider($http).logUserIn(userRequest, function (data) {
    if(!TestUtility.isNull(data) && !TestUtility.isUndefined(data)) {
      console.dir('user data : ' + data);
    };
  });

  var buildUserDataTologUserOut = function () {
    currentUserSession = new UserSession('!jK989&');
    userSession = new UserRequest(currentUserSession.getSessionKey());
  }

  /*Connect to UserService over UserServiceProvider to log the user out*/
  UserServiceProvider($http).logUserOut(userSession, function () {
    if(!TestUtility.isNull(data) && !TestUtility.isUndefined(data)) {
      console.dir('user data : ' + data);
    };
  });

  /*Connect to UserService over UserServiceProvider to get user info*/
  UserServiceProvider($http).getUserInfo(userSession, function () {
    if(!TestUtility.isNull(data) && !TestUtility.isUndefined(data)) {
      console.dir('user data : ' + data);
    };
  });

  getUserAlternativeInfo sessionKey

  updateUserInfo sessionKey, firstName, lastName, email, birthday, gender

  signUserUp firstName, lastName, email, gender, password, basketId

  resetUserPassword email

  changeUserPassword sessionKey, oldPassword, newPassword1, newPassword2

};

module.exports = TestCtrl;