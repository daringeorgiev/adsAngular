/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('LoginCtrl', ['$scope', 'userData', function($scope, userData, notifyService){
    this.pageTitle='Login';

    this.login=function(user){
        userData.login(user,
            function success() {
                notifyService.showInfo("Login successful");
                $location.path("/");
            },
            function error(err) {
                notifyService.showError("Login failed", err);
            }
        );
    }
}]);