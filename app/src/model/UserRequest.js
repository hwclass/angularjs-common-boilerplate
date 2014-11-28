/*
* Model::Request
*/

var UserRequest = function (sessionKey, firstName, lastName, email, birthday, gender, userName, passWord, basketId) {

	this.sessionKey = sessionKey;

	this.firstName = firstName;

	this.lastName = lastName;

	this.email = email;

	this.birthday = birthday;

	this.gender = gender;

	this.userName = userName;

	this.passWord = passWord;

	this.basketId = basketId;

	this.getSessionKey = function () {
		return this.sessionKey;
	};

	this.getFirstName = function () {
		return this.firstName;
	};

	this.getLastName = function () {
		return this.lastName;
	};

	this.getEmail = function () {
		return this.email;
	};

	this.getBirthday = function () {
		return this.birthday;
	};

	this.getGender = function () {
		return this.gender;
	};

	this.getUserName = function () {
		return this.userName;
	};

	this.getPassWord = function () {
		return this.passWord;
	};

	this.getBasketId = function () {
		return this.basketId;
	};

}