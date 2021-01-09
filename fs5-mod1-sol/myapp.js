(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', ['$scope', function ($scope) {
      $scope.lunchMenu = '';
      $scope.messageOutput = '';

      $scope.checkButton = function () {
        var classColor = '';
        var listToCheck = removeEmptyItems($scope.lunchMenu);

        if (listToCheck.length > 0) {
          $scope.messageOutput = checkLunchList(listToCheck);
          classColor = 'greenMessage';
        } else {
          $scope.messageOutput = "Please enter data first";
          classColor = 'redMessage';
        }
        $scope.messageClass = classColor;

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
