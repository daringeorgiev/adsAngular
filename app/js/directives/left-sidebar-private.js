adsApp.directive('leftPrivateSidebar', function () {
    return {
        controller: 'UserCtrl',
        restrict: 'E',
        templateUrl: '../../templates/public/left-sidebar-private.html'
        //replace: true
    }
});