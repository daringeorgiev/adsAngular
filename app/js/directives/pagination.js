/**
 * Created by darin on 1/11/2015.
 */
adsApp.directive('paginationAds', function () {
    return {
        //controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: '../../templates/directives/pagination.html',
        replace: true
    }
});