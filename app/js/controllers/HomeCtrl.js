/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('allAdsController', function($scope, $route, $log, adsDataService) {
    adsDataService.getAllAds(function (resp) {
        $scope.data = resp;
    });

    adsDataService.getAllTowns(function (resp) {
        $scope.towns = resp;
    });
    adsDataService.getAllCategories(function (resp) {
        $scope.categories = resp;
    });

    //$scope.allPages=$scope.data.numPages;

    //$scope.pages=[1, 2, 3];
    //for (var i=1;i<=$scope.data.numPages; i++){
    //    pages.push(i);
    //}

    //$scope.users = [];
    //$scope.totalUsers = 0;
    //$scope.usersPerPage = 25; // this should match however many results your API puts on one page
    //getResultsPage(1);
    //
    //$scope.pagination = {
    //    current: 1
    //};
    //
    //$scope.pageChanged = function(newPage) {
    //    getResultsPage(newPage);
    //};
    //
    //function getResultsPage(pageNumber) {
    //    // this is just an example, in reality this stuff should be in a service
    //    $http.get('path/to/api/users?page=' + pageNumber)
    //        .then(function(result) {
    //            $scope.users = result.data.Items;
    //            $scope.totalUsers = result.data.Count
    //        });
    //}
});