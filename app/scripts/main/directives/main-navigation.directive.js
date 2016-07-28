/*jshint -W003, -W098, -W117, -W026 */
(function() {
  'use strict';

  angular
    .module('ngAmrsBroadcastApp')
    .directive('mainNavigationBar', directive);

  function directive() {
    var directiveDefinition = {
      restrict: 'EA',
      templateUrl: 'views/main/main-navigation.html',
      scope: {
        user: '@'
      },
      link: linkFunc,
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directiveDefinition;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

    Controller.$inject = ['$scope'];

    function Controller($scope) {

  }
})();
