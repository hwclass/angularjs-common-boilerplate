'use strict';

/**
 * @name UserService
 * @desc UserService service
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
      postUserLogout : function (sessionKey, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          data : {'session_key' : sessionKey}
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
      getUserList : function (sessionKey, callback) {
        $http({
          method : 'GET', 
          url : 'url', 
          headers : {'session_key' : sessionKey}
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
      getUserDetail : function (sessionKey, callback) {
        $http({
          method : 'GET', 
          url : 'url', 
          headers : {'session_key' : sessionKey}
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
			patchUserInfo : function (sessionKey, firstName, lastName, email, birthday, gender, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          headers : {'session_key': sessionKey},
          data : {
          'first_name' : firstName,
          'last_name' : lastName,
          'email' : email,
          'birthday' : birthday,
          'gender' : gender
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
      postUserSignUp : function (firstName, lastName, email, gender, password, basketId, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          data : {
            'first_name' : firstName,
            'last_name' : lastName,
            'email' : email,
            'gender' : gender,
            'password' : password,
            'basket_id' : basketId	
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
      postResetPassword : function (email, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          data : {
          'email' : email
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
      postChangePassword : function (sessionKey, oldPassword, newPassword1, newPassword2, callback) {
        $http({
          method : 'POST', 
          url : 'url', 
          headers : {
            'session_key' : sessionKey
          },
          data : {
            'old_password' : oldPassword,
            'new_password1' : newPassword1,
            'new_password2' : newPassword2
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