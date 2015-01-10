adsApp.directive('leftPrivateSidebar', function(){
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: '../../templates/left-sidebar-private.html'
        //replace: true
    }
});