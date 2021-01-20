(function() {
'use strict';

angular.module('MenuApp')
.controller('ItemsList', ItemsListController);

ItemsListController.$inject = ['items']
function ItemsListController(items) {
  var self = this;
  self.items = items;
}
}()); // End IIFE
