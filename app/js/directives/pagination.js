/**
 * Created by darin on 1/11/2015.
 */
adsApp.directive('paginationAds', function(){
    return {
        //controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: '../../templates/public/pagination.html',
        replace: true
    }
});