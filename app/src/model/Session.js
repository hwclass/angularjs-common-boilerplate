'use strict';

/**
 * @name Session
 * @desc Model for Session
 */

var Session = function (sessionId) {

	this.sessionId = sessionId;

	this.getSessionId = function () {
		return this.sessionId;
	};

	this.setSessionId = function (sessionId) {
		this.sessionId = sessionId;
	};

};