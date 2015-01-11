/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.factory('adsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var resource;
    var adsUrl = baseServiceUrl + 'ads?';

    function getAllAds(pageIndex) {
        resource = $resource(adsUrl + '&pagesize=10&startpage=' + pageIndex);
        //console.log(resource);
        return resource.get();
    }

    function filterAds(filter) {
        adsUrl = baseServiceUrl + 'ads?';
        resource = $resource(adsUrl + 'categoryId=' + filter.categoryId + '&townId=' + filter.townId);
        adsUrl = adsUrl + 'categoryId=' + filter.categoryId + '&townId=' + filter.townId;
        return resource.get();
    }

    return {
        getAllAds: getAllAds,
        filterAds: filterAds
    }
}]);

