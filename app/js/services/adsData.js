/**
 * Created by darin on 1/2/2015.
 */
adsApp.factory('adsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
    //var resource=$resource(baseServiceUrl + 'ads?pagesize=10&startpage=3');
    var resource;
    resource=baseServiceUrl;
    //resource=resource + '?pagesize=10&startpage=3';

    function getAllAds(pageIndex){
        resource=$resource(resource + 'ads?pagesize=10&startpage=' + pageIndex);
        //console.log(resource.get());
        return resource.get();
    }

    function filterAds(filter){
        resource=$resource(baseServiceUrl + 'ads?categoryId='+ filter.categoryId + '&townId=' + filter.townId);
        return resource.get();
    }

    return {
        getAllAds: getAllAds,
        filterAds: filterAds
    }
}]);

