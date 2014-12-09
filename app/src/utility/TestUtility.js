/**
 * @name TestUtility
 * @desc TestUtility utility
 */

'use strict';

var TestUtility = function () {

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

};

module.exports = TestUtility;