(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', ['$scope', function ($scope) {
      $scope.lunchMenu = '';
      $scope.messageOutput = '';

      $scope.checkButton = function () {
        var color = 'revert';
        var listToCheck = removeEmptyItems($scope.lunchMenu);

        if (listToCheck.length > 0) {
          $scope.messageOutput = checkLunchList(listToCheck);
          color = 'green';
        } else {
          $scope.messageOutput = "Please enter data first";
          color = 'red';
        }
        document.querySelector("[ng-model='msgPlaceholder']").style.color = color;

      };

      function removeEmptyItems(input) {
        return input.split(',').filter(function (el) {
            return el.trim() || false;
          }).map(function (el) {
            return el.trim();
          });
      }

      function checkLunchList(listToCheck) {
        var msg = "Enjoy!";
        if (listToCheck.length > 3) {
          msg = "Too much!";
        }
        return msg;
      }

  }]);

})();
