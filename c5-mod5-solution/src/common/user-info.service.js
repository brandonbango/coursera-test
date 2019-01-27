(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

function UserInfoService() {
  var service = this;
  var info;

  return {
      getInfo: getInfo,
      setInfo: setInfo
  };

  function getInfo() {
      return info;
  }

  function setInfo(value) {
      info = value;
  }
}



})();
