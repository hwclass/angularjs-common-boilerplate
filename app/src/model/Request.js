'use strict';

/**
 * @name Request
 * @desc Model for Request
 */

var Request = function (requestId) {

	this.requestId = requestId;

	this.getRequestId = function () {
		return this.requestId;
	};

	this.setRequestId = function (requestId) {
		this.requestId = requestId;
	}

};