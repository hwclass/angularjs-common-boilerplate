/**
 * @name UserService
 * @desc UserService service
 */
var UserService = function ($http) {
	
	return (function () {
		
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
			* Phase 1.V3 - 2.1 Post User Login
			*/
			logIn : function (userName, password, basketId, callback) {
				$http({
					method : 'GET', 
					url : 'url', 
					headers : {'sessionKey' : sessionKey}
				}).
				  success(function(data, status, headers, config) {
				    callback(data);
				  }).
				  error(function(data, status, headers, config) {
				    console.log(data);
				});
			},

			/*
			* Phase 1.V3 - 2.2 Post User Logout
			*/
			logOut : function (sessionKey, callback) {
				$http({
					method : 'POST', 
					url : 'url', 
					headers : {'sessionKey' : sessionKey}
				}).
				  success(function(data, status, headers, config) {
				    callback(data);
				  }).
				  error(function(data, status, headers, config) {
				    console.log(data);
				});
			},

			/*
			* Phase 1.V3 - 2.3 Get User List
			*/
			getUserInfo : function (sessionKey, callback) {
				$http({
					method : 'GET', 
					url : 'url', 
					headers : {'sessionKey' : sessionKey}
				}).
				  success(function(data, status, headers, config) {
				    callback(data);
				  }).
				  error(function(data, status, headers, config) {
				    console.log(data);
				});
			},

			/*
			* Phase 1.V3 - 2.4 Get User Detail
			*/
			getUserDetail : function (sessionKey, callback) {
				$http({
					method : 'GET', 
					url : 'url', 
					headers : {'sessionKey' : sessionKey}
				}).
				  success(function(data, status, headers, config) {
				    callback(data);
				  }).
				  error(function(data, status, headers, config) {
				    console.log(data);
				});
			},

			/*
			* Phase 1.V3 - 2.5 Patch User Info
			*/
			updateUserInfo : function (sessionKey, firstName, lastName, email, birthday, gender, callback) {
				$http({
					method : 'POST', 
					url : 'url', 
					headers : {
						session_key: sessionKey,
						first_name : firstName,
						last_name : lastName,
						email : email,
						birthday : birthday,
						gender : gender	
					}
				}).
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