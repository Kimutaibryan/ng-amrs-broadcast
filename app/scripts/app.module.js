/*jshint -W098, -W030 */
/*jscs:disable disallowMixedSpacesAndTabs, requireDotNotation, requirePaddingNewLinesBeforeLineComments, requireTrailingComma*/
(function(){
  'use strict';

  angular
    .module('ngAmrsBroadcastApp', [
    'notification',
    'ngResource',
    'ui.router',
    'ct.ui.router.extras'
  ])

  .config(function($stateProvider, $stickyStateProvider, $urlRouterProvider){

      // For any unmatched url, redirect to /state1
       $urlRouterProvider.otherwise('/');

       // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "/views/main/main.html"
            })
            .state('admin', {
                url: "/admin",
                templateUrl: "/views/admin/publish-notification-container.html"
            })
  })

})();
