(function() {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
    templateUrl: 'src/templates/categories-list.template.html',
    bindings: {
      categories: '<'
    }
})

}()); // End IIFE
