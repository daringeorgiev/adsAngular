/**
 * Created by darin on 1/6/2015.
 */
'use strict';
adsApp.factory('townsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl + 'towns')

    function getAllTowns() {
        return resource.query();
    }

    return {
        getTowns: getAllTowns
    }
}]);