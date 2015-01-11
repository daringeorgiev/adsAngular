'use strict';
adsApp.directive('leftPrivateSidebar', function () {
    return {
        controller: 'UserCtrl',
        restrict: 'E',
        templateUrl: '../../templates/directives/left-sidebar-private.html'
    }
});