var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'registerController'
        });
    });