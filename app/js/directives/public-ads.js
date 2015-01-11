'use strict';
adsApp.directive('publicAds', function () {
    return {
        restrict: 'E',
        templateUrl: '../../templates/directives/public-ads.html',
        replace: true
    }
});