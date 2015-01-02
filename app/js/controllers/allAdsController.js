/**
 * Created by darin on 1/2/2015.
 */
adsApp.controller('allAdsController', function($scope, $route, $log, adsData) {
    adsData.getAll()
        .$promise
        .then(function (data) {
            $scope.data = data;
        }, function (error) {
            $log.error(error);
        });

    $scope.reload = function () {
        $route.reload();
    }
});