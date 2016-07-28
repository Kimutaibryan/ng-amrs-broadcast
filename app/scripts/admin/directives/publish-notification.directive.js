/*jshint -W003, -W098, -W117, -W026 */
(function () {
  'use strict';

  angular
    .module('ngAmrsBroadcastApp')
    .directive('publishNotificationDirective', directive);

  function directive() {
    var directiveDefinition = {
      restrict: 'EA',
      templateUrl: 'views/admin/publish-notification.html',
      scope: {
        data: '=',
        isConnected:'='
      },
      link: linkFunc,
      controller: publishNotificationCtrl,
    };

    return directiveDefinition;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  publishNotificationCtrl.$inject = ['$scope',
    '$resource', 'NfService', '$log'];

  function publishNotificationCtrl($scope, $resource, NfService, $log) {
    var client = new nes.Client('wss://localhost:8002');
    $scope.notify = notify;
    $scope.connectToSocketServer = connectToSocketServer;
    $scope.isConnected = false;
    $scope.data = {
      title: 'title',
      message: 'message',
      config: {
        delay: 300000,
        type: 'success',
        dismiss: true,
        confirm: false
      }
    };
    //Setup the websocket connection and react to updates
    function connectToSocketServer() {
      client.connect(function (err) {
        $scope.isConnected = true;
        console.log('client has connected--->', $scope.isConnected);
      });
    }

    function sendToServer() {
      if ($scope.isConnected) {
        client.message($scope.data, function (err, message) {
          if (err) {
            console.log("Error sending message:", err);
          }
          if (message) {
            console.log("Message sent:", message);
          }
        });
      }
    }

    function notify() {
      sendToServer();
    }
    $scope.connectToSocketServer();

  }
})();
