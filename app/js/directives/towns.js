adsApp.directive('towns', function(){
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: '../../templates/public/towns.html',
        replace: true
    }
});