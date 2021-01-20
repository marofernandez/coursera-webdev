(function() {
'use strict';

angular.module('MenuApp')
.controller('CategoriesList', CategoriesListController);

CategoriesListController.$inject = ['categories']
function CategoriesListController(categories) {
  var self = this;
  self.categories = categories;
}
}()); // End IIFE
