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
      },

      /*
      * Phase 1.V3 - 3.1 Get User Address
      */
      getUserAddress : function (userSession, callback) {
    	  $http({
          method : 'GET', 
          url : 'url',
          data : {
            'session_key' : userSession.getSessionKey()
          }
        }).
        success(function(data, status, headers, config) {
          /*
          * Output : address_id, first_name, last_name, address, city, township, postal_code, phone_area_code, phone_number, response_code, errors
          */
          callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log(data);
        });
      }

    }

  })();

};