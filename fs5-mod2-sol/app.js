(function () {

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ['ShoppingListCheckOffService',
  function ToBuyController(ShoppingListCheckOffService) {
    var self = this;

    self.items = ShoppingListCheckOffService.getToBuyList();

    self.alreadyBought = function (idx) {
      ShoppingListCheckOffService.itemBought(idx);
    }

    self.empty = function() {
      return self.items.length == 0;
    };
  }])
.controller('AlreadyBoughtController', ['ShoppingListCheckOffService',
  function  AlreadyBoughtController(ShoppingListCheckOffService) {
    var self = this;

    self.items = ShoppingListCheckOffService.getAlreadyBoughtList();

    self.empty = function() {
      return self.items.length == 0;
    };
  }])
.service('ShoppingListCheckOffService', function () {
    var self = this;

    var toBuyList = [ { name: "Paquetes de Galletitas de Chocolate", quantity: 3 },
      { name: "Potes de Dulce de Leche", quantity: 2 },
      { name: "Potes de Queso Crema", quantity: 2 },
      { name: "Paquetes de Confites", quantity: 4 },
      { name: "Velita de cumpleaños", quantity: 1 }
      ];
    var boughtList = [];

    self.itemBought = function(idx) {
      boughtList.push(toBuyList[idx]);
      toBuyList.splice(idx, 1);
    }

    self.getToBuyList = function() {
      return toBuyList;
    }

    self.getAlreadyBoughtList = function() {
      return boughtList;
    }
  });

})();
