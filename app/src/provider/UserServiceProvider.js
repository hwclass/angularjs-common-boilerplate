/**
 * @name UserServiceProvider
 * @desc UserServiceProvider provider
 */

 'use strict';

/*===SERVICES===*/
var UserService = require('../service/UserService');

/**
 * @name UserServiceProvider
 * @desc Service provider for UserService
 */
var UserServiceProvider = function ($http) {

  return (function () {

    return {

      /**
      * @name testRequest
      * @ref testRequest
      * @desc Does something awesome
      * @param {Function} callback - Callback after response returns
      * @returns {undefined}
      */
      testRequest : function (callback) {
        UserService($http).testRequest(function (data) {
          callback(data);
        });
      },

      /**
       * @name logUserIn
       * @ref postUserLogin
       * @desc This method makes the coming user log into the application
       * @param {String} userName - User name value
       * @param {String} passWord - Password value
       * @param {String} prefix - Prefix value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      logUserIn : function (userRequest, callback) {
        UserService($http).postUserLogin(userRequest, function (data) {
          callback(data);
        });
      },

      /**
       * @name logUserOut
       * @ref postUserLogout
       * @desc This method makes the coming user log out from the application
       * @param {String} sessionKey - Session key value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      logUserOut : function (userSession, callback) {
        UserService($http).postUserLogout(userSession, function (data) {
          callback(data);
        });
      },

      /**
       * @name getUserInfo
       * @ref getUserList
       * @desc This method retrieves the information with profile details of the current user 
       * @param {String} sessionKey - Session key value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      getUserInfo : function (userSession, callback) {
        UserService($http).getUserList(userSession, function (data) {
          callback(data);
        });
      },

      /**
       * @name getUserAlternativeInfo
       * @ref getUserDetail
       * @desc This method retrieves the information with profile details of the current user (alternative to getUserInfo)
       * @param {String} sessionKey - Session key value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      getUserAlternativeInfo : function (userSession, callback) {
        UserService($http).getUserDetail(userSession, function (data) {
          callback(data);
        });
      },

      /**
       * @name updateUserInfo
       * @ref patchUserInfo
       * @desc This method updates the information with profile details of the current user 
       * @param {String} sessionKey - Session key value
       * @param {String} firstName - First name value
       * @param {String} lastName - Last name value
       * @param {String} email - Email value
       * @param {String} birthday - Birthday value
       * @param {String} gender - Gender value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      updateUserInfo : function (userSession, userRequest, callback) {
        UserService($http).patchUserInfo(userSession, userRequest, function (data) {
          callback(data);
        });
      },

      /**
       * @name signUserUp
       * @ref postUserSignUp
       * @desc This method makes the coming user sign up for the application
       * @param {String} firstName - First name value
       * @param {String} lastName - Last name value
       * @param {String} email - Email value
       * @param {String} gender - Gender value
       * @param {String} password - Password value
       * @param {String} basketId - Basket id value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      signUserUp : function (userRequest, callback) {
        UserService($http).postUserSignUp(userRequest, function (data) {
          callback(data);
        });
      },

      /**
       * @name resetUserPassword
       * @ref postResetPassword
       * @desc This method makes the current password of the user updated for the application
       * @param {String} email - Email value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      resetUserPassword : function (userRequest, callback) {
        UserService($http).postResetPassword(userRequest, function (data) {
          callback(data);
        });
      },

      /**
       * @name changeUserPassword
       * @ref postChangePassword
       * @desc This method makes the coming user sign up for the application
       * @param {String} email - Email value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      changeUserPassword : function (userSession, userRequest, callback) {
        UserService($http).postChangePassword(userSession, userRequest, function (data) {
          callback(data);
        });
      }

    }

  })();

};

<<<<<<< Updated upstream
 module.exports = UserServiceProvider;
=======
module.exports = ServiceProvider;
>>>>>>> Stashed changes
