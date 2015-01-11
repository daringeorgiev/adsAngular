/**
 * Created by darin on 1/2/2015.
 */
adsApp.factory('adsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    //var resource=$resource(baseServiceUrl + 'ads?pagesize=10&startpage=3');
    var resource;
    var adsUrl = baseServiceUrl + 'ads?';
    //var filtredUrl=adsUrl;
    //var pageIndex=1;
    //resource=baseServiceUrl;
    //resource=resource + '?pagesize=10&startpage=3';

    function getAllAds(pageIndex) {
        resource = $resource(adsUrl + '&pagesize=10&startpage=' + pageIndex);
        //console.log(resource);
        return resource.get();
    }

    function filterAds(filter) {
        adsUrl = baseServiceUrl + 'ads?';
        resource = $resource(adsUrl + 'categoryId=' + filter.categoryId + '&townId=' + filter.townId);
        adsUrl = adsUrl + 'categoryId=' + filter.categoryId + '&townId=' + filter.townId;
        //console.log(resource);
        return resource.get();
    }

    //function numPages(){
    //
    //}

    return {
        getAllAds: getAllAds,
        filterAds: filterAds
    }
}]);

