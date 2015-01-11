/**
 * Created by darin on 1/5/2015.
 */
adsApp.directive('leftPublicSidebar', function () {
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: '../../templates/directives/left-sidebar.html'
        //replace: true
    }
});