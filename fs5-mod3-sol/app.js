(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NIDController', NIDController)
.directive('foundItems', FoundItemsDirective)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath','https://davids-restaurant.herokuapp.com');

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'menuitemslist.html',
    scope: {
      itemsList: '<foundItems',
      onRemove: '&'
    }
  };

  return ddo;
}

NIDController.$inject = ['MenuSearchService'];
function NIDController(MenuSearchService) {
  var self = this;

  self.searchTerm = '';

  self.searchMenu = function () {
    MenuSearchService.getMatchedMenuItems(self.searchTerm)
    .then(function (foundedItems) {
        self.found = foundedItems;
      });
  };

  self.onRemove = function (idx) {
    MenuSearchService.removeItem(idx);
  };

  self.isEmpty = function () {
    return (self.found !== undefined && self.found.length == 0);
  }
}

MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {
  var self = this;

  var items = [];

  self.getMatchedMenuItems = function (filter) {
    var filterLC = filter.toLowerCase();

    return getMenuItems().then(function (menuItems) {
      items = menuItems.filter(function (it) {
          return (it.description.toLowerCase().indexOf(filterLC) != -1);
        });
      return items;
    });
  };

  self.removeItem = function (index) {
    items.splice(index, 1);
  };

  function getMenuItems() {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      return response.data.menu_items;
    });
  }

}

})();
