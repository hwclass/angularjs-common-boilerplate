/**
 * @name TestUtility
 * @desc TestUtility utility
 */

var TestUtility = (function () {

  'use strict';

  return(function () {

    return {

      isNull : function (obj) {
        return (typeof obj === 'null' ? true : false);
      },

      isUndefined : function (obj) {
        return (typeof obj === 'undefined' ? true : false);
      }

    }

  })();

})();

module.exports = TestUtility;
