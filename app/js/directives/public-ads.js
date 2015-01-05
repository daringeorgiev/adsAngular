adsApp.directive('publicAds', function(){
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: '../../templates/public/public-ads.html',
        replace: true
    }
});