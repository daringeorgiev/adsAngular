/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('HomeCtrl', ['$scope', '$route', '$log', 'adsData', 'categoriesData', 'townsData', function($scope, $route, $log, adsData, categoriesData, townsData) {
    var self=this;

    self.pageTitle='Home';

    self.data=adsData.getAllAds(1);
    self.categories = categoriesData.getCategories();
    self.towns = townsData.getTowns();
}]);