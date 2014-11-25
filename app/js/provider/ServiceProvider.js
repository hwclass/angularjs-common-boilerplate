/*===SERVICES===*/
var UserService = require('../service/User');

/**
 * @name ServiceProvider
 * @desc Main application provider for services
 */
var ServiceProvider = function ($http) {

  return (function () {

    return {

      /**
      * @name testRequest
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
       * @name logIn
       * @desc Does something awesome
       * @param {String} userName - userName value
       * @param {String} passWord - passWord value
       * @param {String} prefix - Prefix value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      logIn : function (userName, passWord, basketId, callback) {
        UserService($http).logIn(userName, password, basketId, function (data) {
          callback(data);
        });
      },

    }

  });

};

 module.exports = ServiceProvider;