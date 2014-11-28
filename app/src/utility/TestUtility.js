'use strict';

module.exports = {
	isNull : function (obj) {
		return (typeof obj === 'null' ? true : false);
	},
	isUndefined : function (obj) {
		return (typeof obj === 'undefined' ? true : false);
	}
};