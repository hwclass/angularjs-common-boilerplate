'use strict';

module.exports = {
	cities : [
	  {
	  	city : 'Istanbul',
	  	prefix : 'tr'
	  },
	  {
    	city : 'Berlin',
    	prefix : 'de'
    },
    {
    	city : 'Amsterdam',
    	prefix : 'nl'
    },
    {
    	city : 'Tokyo',
    	prefix : 'jp'
    }
  ],
  getCities : function () {
  	return this.cities;
  }
};