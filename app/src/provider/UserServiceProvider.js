'use strict';

/*===SERVICES===*/
var UserService = require('../service/UserService');

/**
 * @name UserServiceProvider
 * @desc Service provider for UserService
 */
var ServiceProvider = function ($http) {

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
      logUserIn : function (userName, passWord, basketId, callback) {
        UserService($http).postUserLogin(userName, password, basketId, function (data) {
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
      logUserOut : function (sessionKey, callback) {
        UserService($http).postUserLogout(sessionKey, function (data) {
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
      getUserInfo : function (sessionKey, callback) {
        UserService($http).getUserList(sessionKey, function (data) {
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
      getUserAlternativeInfo : function (sessionKey, callback) {
        UserService($http).getUserDetail(sessionKey, function (data) {
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
      updateUserInfo : function (sessionKey, firstName, lastName, email, birthday, gender, callback) {
        UserService($http).patchUserInfo(sessionKey, firstName, lastName, email, birthday, gender, function (data) {
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
      signUserUp : function (firstName, lastName, email, gender, password, basketId, callback) {
        UserService($http).postUserSignUp(firstName, lastName, email, gender, password, basketId, function (data) {
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
      resetUserPassword : function (email, callback) {
        UserService($http).postResetPassword(email, function (data) {
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
      changeUserPassword : function (sessionKey, oldPassword, newPassword1, newPassword2, callback) {
        UserService($http).postChangePassword(sessionKey, oldPassword, newPassword1, newPassword2, function (data) {
          callback(data);
        });
      }

    }

  })();

};

 module.exports = ServiceProvider;