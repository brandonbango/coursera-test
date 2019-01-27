(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['userInfo', 'MenuService', 'ApiPath'];
function UserInfoController(userInfo, MenuService, ApiPath) {
  var ctrl = this;
  ctrl.userInfo = userInfo;
  ctrl.menuItems = [];
  ctrl.basePath = ApiPath;

  if(ctrl.isUserRegistered) {
    MenuService.getMenuItems(ctrl.userInfo.fav)
    .then(function (response) {
      console.log('response: ',response)
      ctrl.menuItems.push(response);
    })
  }

  ctrl.isUserRegistered = function() {
    if(ctrl.userInfo) {
      return true;
    }
    return false;
  };
}

})();
