/**
 * Created by darin on 1/2/2015.
 */
adsApp.factory('adsDataService', function ($http, $log) {
    return {
        getAll: function(success){
            var pageIndex=1;
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage=' + pageIndex})
                .success(function(data, status, headers, config){
                    success(data);
                })
                .error(function(data, status, headers, config){
                    $log.warn(data);
                })

        }

    }
});