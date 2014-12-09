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
      }

    }

  })();

};