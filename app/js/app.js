var adsApp = angular.module('adsApp', ['ngResource', 'ngRoute'])
    .constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '../templates/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl as ctrl'
        });
        $routeProvider.otherwise({
            templateUrl: '../templates/html.html',
            controller: 'HomeCtrl'
        });
    });