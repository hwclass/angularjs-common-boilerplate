/**
 * @name BranchQueueService
 * @desc BranchQueueService service
 */
var ProductListService = function ($http, $firebaseObject) {
	return (function () {
		return {
			/**
		   * @name getWeather
		   * @desc Does something awesome
		   * @param {String} city - City value
		   * @param {String} prefix - Prefix value
		   * @param {Function} callback - Callback after response returns
		   * @noreturn
		   */
			testMethod : function (callback) {
				'use strict';

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

				callback(data);

			}
		}
	})();
};

module.exports = DashboardService;
