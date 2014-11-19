var TestService = function ($http) {

	return (function () {

		return {

			getWeather : function (city, prefix, callback) {
				
				'use strict';
				
				var currentUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+prefix;
				
				/*
				* $http({method: 'GET', url: currentUrl, headers: {'test': 'WEB QWxhZGRpbjpvcGVuIHNlc2FtZQ'}})
				*/
				$http({method: 'GET', url: currentUrl}).
				  success(function(data, status, headers, config) {
				    callback(data);
				  }).
				  error(function(data, status, headers, config) {
				    console.log(data);
				});

			}

		}

	})();

};

module.exports = TestService;