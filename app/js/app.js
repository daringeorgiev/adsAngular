var adsApp = angular.module('adsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '../templates/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'registerController'
        });
        $routeProvider.otherwise({
            templateUrl: '../templates/html.html',
            controller: 'HomeCtrl'
        });
    });