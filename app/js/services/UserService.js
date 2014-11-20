var UserService = function () {
	
	return (function () {
		
		return {

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
					headers : {session_key: sessionKey},
					{
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
			},

			/*
			* Phase 1.V3 - 2.6 Post User Signup
			*/
			signUp : function (sessionKey, firstName, lastName, email, gender, password, basketId, callback) {
				$http({
					method : 'POST', 
					url : 'url', 
					headers : {session_key: sessionKey},
					{
						first_name : firstName,
						last_name : lastName,
						email : email,
						gender : gender,
						password : password,
						basket_id : basketId
					}
				}).
				  success(function(data, status, headers, config) {
				    callback(data);
				  }).
				  error(function(data, status, headers, config) {
				    console.log(data);
				});
			},

			/*
			* Phase 1.V3 - 2.7 Post Reset Password
			*/
			resetPassword : function (email, callback) {
				$http({
					method : 'POST', 
					url : 'url', 
					headers : {session_key: sessionKey},
					{email : email}
				}).
				  success(function(data, status, headers, config) {
				    callback(data);
				  }).
				  error(function(data, status, headers, config) {
				    console.log(data);
				});
			},

			/*
			* Phase 1.V3 - 2.8 Post Change Password
			*/
			changePassword : function (sessionKey, oldPassword, newPassword1, newPassword2, callback) {
				$http({
					method : 'POST', 
					url : 'url', 
					headers : {session_key: sessionKey},
					{
						old_password : oldPassword,
						new_password1 : newPassword1,
						new_password2: : newPassword2
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