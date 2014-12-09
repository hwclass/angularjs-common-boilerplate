/*
* Model::Request
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