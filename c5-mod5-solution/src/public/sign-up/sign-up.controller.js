(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserInfoService'];
function SignUpController(MenuService, UserInfoService) {
  var ctrl = this;
  ctrl.favError = false;
  ctrl.completed = false;
  ctrl.userInfo = {};

  ctrl.submit = function () {
    var item = MenuService.getMenuItem(ctrl.fav);

    item.then(function (resp) {
      if(resp) {
        ctrl.userInfo.firstname = ctrl.firstname;
        ctrl.userInfo.lastname = ctrl.lastname;
        ctrl.userInfo.email = ctrl.email;
        ctrl.userInfo.phone = ctrl.phone;
        ctrl.userInfo.fav = resp

        UserInfoService.setInfo(ctrl.userInfo);

        ctrl.completed = true;
        ctrl.favError = false;
      }
    }).catch(function(error) {
      console.log("Something went wrong.");
      ctrl.completed = false;
      ctrl.favError = true;
    });
  };
}

})();
