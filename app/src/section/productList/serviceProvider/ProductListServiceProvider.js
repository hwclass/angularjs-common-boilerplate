/**
 * @name ProductListService
 * @desc ProductListService provider
 */

 'use strict';

/*===SERVICES===*/
var ProductListService = require('../service/ProductListService');

/**
 * @name BranchQueueServiceProvider
 * @desc Service provider for UserService
 */
var ProductListServiceProvider = function ($http) {

  return (function () {

    return {

      /**
      * @name testRequest
      * @ref testRequest
      * @desc Does something awesome
      * @param {Function} callback - Callback after response returns
      * @noreturn
      */
      testMethod : function (callback) {
        callback();
      }

    }

  })();

};

 module.exports = ProductListServiceProvider;
