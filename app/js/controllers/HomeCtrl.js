/**
 * Created by darin on 1/2/2015.
 */
'use strict';
//adsApp.controller('HomeCtrl', function($scope, $route, $log, adsData) {
//    var self=this;
//    self.pageTitle='Home';
//
//    adsData.getAllAds(function (resp) {
//        self.data = resp;
//    });
//
//    adsData.getAllTowns(function (resp) {
//        self.towns = resp;
//    });
//    adsData.getAllCategories(function (resp) {
//        self.categories = resp;
//    });

adsApp.controller('HomeCtrl', ['$scope', '$route', '$log', 'adsData', 'categoriesData', 'townsData', function($scope, $route, $log, adsData, categoriesData, townsData) {
    var self=this;

    self.pageTitle='Home';

    self.data=adsData.getAllAds(1);
    self.categories = categoriesData.getCategories();
    self.towns = townsData.getTowns();
}]);