(function() {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService($http,ApiBasePath) {
  var self = this;

  self.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    });

  }; // End getAllCategories function def

  self.getItemsForCategory = function (short_name) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: { category: short_name}
    }).then(function (response) {
      return response.data.menu_items;
    })
  }
}

}()); // End IIFE
