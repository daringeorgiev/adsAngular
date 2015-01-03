/**
 * Created by darin on 1/2/2015.
 */
adsApp.factory('adsDataService', function ($http, $log) {
    return {
        getAllAds: function (success) {
            var pageIndex = 1;
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage=' + pageIndex})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })

        },
        //getResultsPage: function(pageNumber) {
        //// this is just an example, in reality this stuff should be in a service
        //$http.get('path/to/api/users?page=' + pageNumber)
        //    .then(function(result) {
        //        $scope.users = result.data.Items;
        //        $scope.totalUsers = result.data.Count
        //    });
        //},
        getAllTowns: function (success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })

        },
        getAllCategories: function (success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })

        }
    }
});