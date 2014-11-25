/**
 * @name TestService
 * @desc Test application service
 */
var TestService = function ($http) {
	return (function () {
		return {
			/**
		   * @name getWeather
		   * @desc Does something awesome
		   * @param {String} city - City value
		   * @param {String} prefix - Prefix value
		   * @param {Function} callback - Callback after response returns
		   * @returns {undefined}
		   */
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