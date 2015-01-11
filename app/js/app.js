var adsApp = angular.module('adsApp', ['ngResource', 'ngRoute', 'cgNotify'])
    .constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl as ctrl'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl as ctrl'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl as ctrl'
        });
        $routeProvider.when('/user/home', {
            templateUrl: '../templates/user/homeUser.html',
            controller: 'UserCtrl as ctrl'
        });
        $routeProvider.when('/user/ads', {
            templateUrl: '../templates/user/myAds.html',
            controller: 'UserCtrl as ctrl'
        });
        $routeProvider.when('/user//ads/publish', {
            templateUrl: 'templates/user/ads/publish.html',
            controller: 'PublishCtrl as ctrl'
        });
        $routeProvider.when('/user//ads/edit', {
            templateUrl: 'templates/user/ads/edit.html',
            controller: 'UserCtrl as ctrl'
        });
        //$routeProvider.otherwise({
        //    redirectTo: '/'
        //});
    });