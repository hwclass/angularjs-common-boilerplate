'use strict';

/**
 * @name AddressService
 * @desc AddressService service
 */

var AddressService = function ($http) {

  return(function () {

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
      }

    }

  })();

};