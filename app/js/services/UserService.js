var UserService = function () {
	return (function () {
		return {
			/*
			* POST
			*/
			login : function (userName, password, basketId, callback) {
				$http.get('url').
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

module.exports = UserService;