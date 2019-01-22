(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoryItems'];
function ItemsController(categoryItems) {
  var ctrl = this;

  ctrl.categoryItems = categoryItems;
}

})();
