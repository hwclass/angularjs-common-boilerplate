/*
* Model::User
*/

var User = new function (username, password, basketId) {
	
	this.userName = userName;
	
	this.passWord = passWord;

	this.basketId = basketId;

	this.getUserName = function () {
		return this.userName;
	};

	this.getPassWord = function () {
		return this.passWord;
	};

	this.basketId = function () {
		return this.basketId;
	};

};