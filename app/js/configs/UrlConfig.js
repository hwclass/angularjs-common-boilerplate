'use strict';

module.exports = {
  url : {
  	user : {
  		logIn : '',
  		logOut : '',
  		getUserInfo : '',
  		getUserDetail : '',
  		updateUserInfo : '',
  		signUp : '',
  		resetPassword : '',
  		changePassword : ''
  	}
  }
  getUserLoginUrl : function () {
    return this.url.user.logIn;
  },
  getUserLogOutUrl : function () {
    return this.url.user.logOut;
  },
  getUserInfoUrl : function () {
    return this.url.user.getUserInfo;
  },
  getUserUpdateUserInfoUrl : function () {
    return this.url.user.getUserDetail;
  },
  getUserUpdateUserInfoUrl : function () {
    return this.url.user.updateUserInfo;
  },
  getUserSignUpUrl : function () {
    return this.url.user.signUp;
  },
  getUserResetPasswordUrl : function () {
    return this.url.user.resetPassword;
  },
  getUserChangePasswordUrl : function () {
    return this.url.user.changePassword;
  }
};