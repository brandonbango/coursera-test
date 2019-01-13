(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.check = function () {
    var menu = $scope.lunchMenu.split(",");
    var count = menu.length;

    if(menu == "") {
      $scope.message = "Please enter data first";
    } else {
      if(count <= 3) {
        $scope.message = "Enjoy!";
      } else if(count > 3) {
        $scope.message = "Too much!";
      }
    }
  };

}

})();