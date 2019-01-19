(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&',
      isEmpty: '<'
    },
    controller: NarrowItDownController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.found = [];
  ctrl.isEmpty = false;

  ctrl.search = function (searchTerm) {
    if(searchTerm == "") {
      ctrl.isEmpty = true;
    } else {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    
      promise.then(function (response) {
        ctrl.found = response;
        ctrl.isEmpty = (ctrl.found.length == 0) ? true : false;

      }).catch(function(error) {
        console.log("Something went wrong.");
      });
    }
  };

  ctrl.remove = function (idx) {
    ctrl.found.splice(idx, 1);
  };

}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function (result) {
      var foundItems = [];
      var items = result.data.menu_items;

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        
        if(item.description.includes(searchTerm)) {
          foundItems.push(item);
        }
      }

      return foundItems;
    });
  }
}

})();