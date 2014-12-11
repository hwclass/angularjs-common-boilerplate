/*
* Model::UserSession
*/

var UserSession = function (sessionKey) {

  this.sessionKey = sessionKey;

  this.getSessionKey = function () {
    return this.sessionKey;
  };

};

module.exports = UserSession;