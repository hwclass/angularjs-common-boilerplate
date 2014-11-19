var TestService = function ($http, callback) {
	
	'use strict';

	$http.get('http://api.openweathermap.org/data/2.5/weather?q=Istanbul,tr').
	  success(function(data, status, headers, config) {
	    callback(data);
	  }).
	  error(function(data, status, headers, config) {
	    console.log(data);
	});

};

module.exports = TestService;

/*
var TestService = (function ($http) {
	
	'use strict';

	var getProducts = function () {
		return [
				{
					'name' : 'T-shirt',
					'desc' : 'Awasome t-shirt for you!',
					'price': 15
				},
				{
					'name' : 'Sweet-shirt',
					'desc' : 'Awasome s-shirt for you!',
					'price': 12
				}
		];
	};

	var getWeather = function (callback) {
		$http.get('http://api.openweathermap.org/data/2.5/weather?q=Istanbul,tr').
		  success(function(data, status, headers, config) {
		    callback(data);
		  }).
		  error(function(data, status, headers, config) {
		    console.log(data);
		});
	};

	return {
		getProducts : getProducts,
		getWeather : getWeather
	}

})();

*/