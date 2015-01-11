/**
 * Created by darin on 1/11/2015.
 */
'use strict';
adsApp.directive('paginationAds', function () {
    return {
        restrict: 'E',
        templateUrl: '../../templates/directives/pagination.html',
        replace: true
    }
});