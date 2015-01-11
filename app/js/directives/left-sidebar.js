/**
 * Created by darin on 1/5/2015.
 */
'use strict';
adsApp.directive('leftPublicSidebar', function () {
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: '../../templates/directives/left-sidebar.html'
    }
});