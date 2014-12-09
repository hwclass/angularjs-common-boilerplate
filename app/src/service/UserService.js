'use strict';

/**
 * @name UserService
 * @desc Service for User
 */
var UserService = function ($http) {

  return (function () {

    return {

      testRequest : function (callback) {
        $http({
          method : 'GET',
          url : 'http://api.openweathermap.org/data/2.5/weather?q=London,uk'
        }).
        success(function (data, status, headers, config) {
          callback(data)
        }).
        error(function (data, status, headers, config) {
          console.log(data);
        });
      },

      /*
      * Phase 1.V3 - 2.1 Post User Login
      */
      postUserLogin : function (userRequest, callback) {
        $http({
          method : 'GET', 
          url : 'url',
          data : {
            'username' : userRequest.getUserName(),
            'password' : userRequest.getPassWord(),
            'basket_id' : userRequest.getBasketId()
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output : session_key, response_code, errors
          */
          callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      },

      /*
      * Phase 1.V3 - 2.2 Post User Logout
      */
      postUserLogout : function (userSession, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          data : {
            'session_key' : userSession.getSessionKey()
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output : response_code, errors
          */
          callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      },

      /*
      * Phase 1.V3 - 2.3 Get User List
      */
      getUserList : function (userSession, callback) {
        $http({
          method : 'GET', 
          url : 'url', 
          headers : {
            'session_key' : userSession.getSessionKey()
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output : first_name, last_name, email, birthday, gender, response_code, errors
          */
          callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      },

      /*
      * Phase 1.V3 - 2.4 Get User Detail
      */
      getUserDetail : function (userSession, callback) {
        $http({
          method : 'GET', 
          url : 'url', 
          headers : {
            'session_key' : userSession.getSessionKey()
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output : first_name, last_name, email, birthday, gender, response_code, errors
          */
          callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      },

      /*
      * Phase 1.V3 - 2.5 Patch User Info
      */
      patchUserInfo : function (userSession, userRequest, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          headers : {
            'session_key': userSession.getSessionKey()
          },
          data : {
            'first_name' : userRequest.getFirstName(),
            'last_name' : userRequest.getLastName(),
            'email' : userRequest.getEmail,
            'birthday' : userRequest.getBirthday(),
            'gender' : userRequest.getGender()
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output : response_code, errors
          */
          callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      },

      /*
      * Phase 1.V3 - 2.6 Post User Signup
      */
      postUserSignUp : function (userRequest, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          data : {
            'first_name' : userRequest.getFirstName(),
            'last_name' : userRequest.getLastName,
            'email' : userRequest.getEmail(),
            'gender' : userRequest.getGender(),
            'password' : userRequest.getPassWord(),
            'basket_id' : userRequest.getBasketId()	
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output headers : Location
          */
          callback(headers);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      },

      /*
      * Phase 1.V3 - 2.7 Post Reset Password
      */
      postResetPassword : function (userRequest, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          data : {
          'email' : userRequest.getEmail()
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output : response_code, errors
          */
          callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      },

      /*
      * Phase 1.V3 - 2.8 Post Change Password
      */
      postChangePassword : function (userSession, userRequest, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          headers : {
            'session_key' : userSession.getSessionKey()
          },
          data : {
            'old_password' : userRequest.getOldPassWord(),
            'new_password1' : userRequest.getNewPassWord1(),
            'new_password2' : userRequest.getNewPassWord2()
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output : response_code, errors
          */
          callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      }

    }

  })();

};

module.exports = UserService;