/*
* Model::User
*/

var User = function (userName, passWord, name, surName, address, basketId) {
	
  this.userName = userName;

  this.passWord = passWord;

	this.name = name;

  this.surName = surName;

  this.address = address;

  this.basketId = basketId;

  this.getUserName = function () {
    return this.userName;
  };

  this.getPassWord = function () {
    return this.passWord;
  };

  this.getName = function () {
    return this.name;
  };

  this.getSurName = function () {
    return this.surName;
  };

  this.getAddress = function () {
    return this.address;
  };

	this.getBasketId = function () {
		return this.basketId;
	};

};

module.exports = User;