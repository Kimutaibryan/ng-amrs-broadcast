/*jshint -W003, -W098, -W117, -W026 */
(function () {
  'use strict';

  angular
    .module('ngAmrsBroadcastApp')
    .directive('displayNotificationDirective', directive);

  function directive() {
    var directiveDefinition = {
      restrict: 'EA',
      templateUrl: 'views/main/display-notification.html',
      scope: {
        data: '@'
      },
      link: linkFunc,
      controller: displayNotificationCtrl,
    };

    return directiveDefinition;
  }

  function linkFunc(scope, el, attr, ctrl) {
  }

  displayNotificationCtrl.$inject = ['$scope',
    '$resource', 'NfService', '$log'];

  function displayNotificationCtrl($scope, $resource, NfService, $log) {
    var client = new nes.Client('wss://localhost:8002');
    client.connect(function (err) {
      client.onUpdate = function (update) {
        $scope.$apply(function () {
          console.log('A new message has been received', update)
          $scope.data = update;
          var promise = NfService.notify($scope.data);
          promise.global.then(function () {
            $scope.logs += "notification confirmed  !"
          }, function () {
            $scope.logs += "notification dismissed  !"
          });
        });
      };
    });

  }
})();
