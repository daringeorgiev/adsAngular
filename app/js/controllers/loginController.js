/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('LoginCtrl', ['$scope', '$location', 'notify', 'userData', function ($scope, $location, notify, userData) {
    this.pageTitle = 'Login';

    this.login = function (user) {
        userData.login(user)
            .then(function () {
                $location.path('/user/home');
                notify({message: 'Login success', classes: 'alert-success'});
            }, function () {
                notify({message: 'Invalid Login', classes: 'alert-danger'});
            }
        );
    }
}]);