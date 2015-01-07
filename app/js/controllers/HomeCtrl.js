/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('HomeCtrl', function($scope, $route, $log, adsData) {
    $scope.pageTitle='Home';

    adsData.getAllAds(function (resp) {
        $scope.data = resp;
    });

    adsData.getAllTowns(function (resp) {
        $scope.towns = resp;
    });
    adsData.getAllCategories(function (resp) {
        $scope.categories = resp;
    });


});