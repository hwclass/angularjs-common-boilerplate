'use strict';

module.exports = (function() {
  
  /*
	* URL_LOGIN::String
  */
  var URL_USER_LOGIN = '/';

  /*
	* URL_USER_LOGOUT::String
  */
  var URL_USER_LOGOUT = '/';
  
  /*
	* URL_USER_GET_USER_INFO::String
  */
  var URL_USER_GET_USER_INFO = '/';

  /*
	* URL_USER_GET_USER_DETAIL::String
  */
  var URL_USER_GET_USER_DETAIL = '/';

  /*
	* URL_USER_UPDATE_USER_INFO::String
  */
  var URL_USER_UPDATE_USER_INFO = '/';

  /*
	* URL_USER_SIGUP::String
  */
  var URL_USER_SIGUP = '/';

  /*
	* URL_USER_RESET_PASSWORD::String
  */
  var URL_USER_RESET_PASSWORD = '/';

  /*
	* URL_USER_CHANGE_PASSWORD::String
  */
  var URL_USER_CHANGE_PASSWORD = '/';

  return {
  	getUserLoginUrl : function () {
		  return URL_USER_LOGIN;
		},
		getUserLogOutUrl : function () {
		  return URL_USER_LOGOUT;
		},
		getUserInfoUrl : function () {
		  return URL_USER_GET_USER_INFO;
		},
		getUserUpdateUserInfoUrl : function () {
		  return URL_USER_UPDATE_USER_INFO;
		},
		getUserUpdateUserInfo : function () {
		  return URL_USER_UPDATE_USER_INFO;
		},
		getUserSignUpUrl : function () {
		  return URL_USER_SIGUP;
		},
		getUserResetPasswordUrl : function () {
		  return URL_USER_RESET_PASSWORD;
		},
		getUserChangePasswordUrl : function () {
		  return URL_USER_CHANGE_PASSWORD;
		}
	};

})();