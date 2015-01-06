/**
 * Created by darin on 1/6/2015.
 */
adsApp.factory('categoriesData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
    var resource=$resource(baseServiceUrl + 'categories')
    function getAllCategories(){
        return resource.query();
    }
    return {
        getCategories: getAllCategories
    }
}]);