/*
* Model::Request
*/

var UserRequest = function (firstName, lastName, email, birthday, gender, userName, passWord, oldPassWord, newPassWord1, newPassWord2, basketId) {

	this.firstName = firstName;

	this.lastName = lastName;

	this.email = email;

	this.birthday = birthday;

	this.gender = gender;

	this.userName = userName;

	this.passWord = passWord;

	this.basketId = basketId;
	
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

	this.getOldPAssWord = function () {
		return this.oldPassWord;
	};

	this.getNewPAssWord1 = function () {
		return this.newPassWord1;
	};

	this.getNewPAssWord2 = function () {
		return this.newPassWord2;
	};

	this.getBasketId = function () {
		return this.basketId;
	};

}