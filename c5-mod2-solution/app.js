(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var to_buy_ctrl = this;
  to_buy_ctrl.items = ShoppingListCheckOffService.getToBuyItems();

  to_buy_ctrl.bought = function (idx) {
    ShoppingListCheckOffService.bought(idx);
  };

  to_buy_ctrl.empty = function () {
    if(to_buy_ctrl.items.length < 1) {
      return true;
    }
    return false;
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought_ctrl = this;
  bought_ctrl.items = ShoppingListCheckOffService.getBoughtItems();

  bought_ctrl.empty = function () {
    if (bought_ctrl.items.length > 0) {
      return false;
    }
    return true;
  };

}

function ShoppingListCheckOffService() {
  var service = this;
  var to_buy_items = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 3 },
    { name: "apples", quantity: 5 },
    { name: "bananas", quantity: 2 },
    { name: "peaches", quantity: 20 }
  ];
  var bought_items = [];

  service.bought = function (idx) {
    var item = to_buy_items[idx];
    to_buy_items.splice(idx, 1);
    bought_items.push(item);
  };

  service.getToBuyItems = function () {
    return to_buy_items;
  };

  service.getBoughtItems = function () {
    return bought_items;
  };
}

})();