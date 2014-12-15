/**
 * @name AddressServiceProvider
 * @desc AddressServiceProvider provider
 */

 'use strict';

/*===SERVICES===*/
var AddressService = require('../service/AddressService');

/**
 * @name AddressServiceProvider
 * @desc Service provider for AddressService
 */
var AddressServiceProvider = function ($http) {

  return(function () {

    return {

      /**
      * @name testRequest
      * @ref testRequest
      * @desc Does something awesome
      * @param {Function} callback - Callback after response returns
      * @returns {undefined}
      */
      testRequest : function (callback) {
        AddressService($http).testRequest(function (data) {
          callback(data);
        });
      },

      /**
       * @name getUserAddress
       * @ref getUserAddress
       * @desc This method gets the address of the user
       * @param {String} userName - User name value
       * @param {String} passWord - Password value
       * @param {String} prefix - Prefix value
       * @param {Function} callback - Callback after response returns
       * @returns {undefined}
       */
      getUserAddress : function (userSession, callback) {
      	AddressService($http).getUserAddress(function (data) {
      	  callback(data);
      	});
      }

    }

  })();

};

module.exports = AddressServiceProvider;