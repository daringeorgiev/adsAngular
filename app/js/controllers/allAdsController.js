/**
 * Created by darin on 1/2/2015.
 */
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
        //.$promise
        //.then(function (data) {
        //    $scope.data = data;))
        //}, function (error) {
        //    $log.error(error);
        //});

    //$scope.reload = function () {
    //    $route.reload();
    //}
});