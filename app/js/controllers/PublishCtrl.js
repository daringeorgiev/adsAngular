/**
 * Created by darin on 1/11/2015.
 */
'use strict';
adsApp.controller('PublishCtrl', ['$scope', '$route', '$location', 'adsData', 'categoriesData', 'townsData', 'userData', 'notify', 'authentication',
    function ($scope, $route, $location, adsData, categoriesData, townsData, userData, notify, authentication) {
        var self = this;
        self.pageTitle = 'Publish New Ad';
        self.categories = categoriesData.getCategories()
            .$promise
            .then(function (data) {
                $scope.categories = data;
            });
        self.towns = townsData.getTowns()
            .$promise
            .then(function (data) {
                $scope.towns = data;
            });
        self.publish = function (data) {
            //ToDo
            notify(data);
        };
        self.logout = function () {
            //ToDo
            $location.path('/');

        };
        self.userData=authentication.getUser();


    }]);