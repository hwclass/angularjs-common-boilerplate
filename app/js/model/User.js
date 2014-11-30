/*
* Model::User
*/

var User = function (userName, passWord, name, surName, address, basketId) {
	
  this.userName = userName;

  this.name = name;

  this.surName = surName;

  this.address = address;

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

module.exports = User;