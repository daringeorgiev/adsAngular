/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('LoginCtrl', ['$scope', 'userData', function($scope, userData){
    this.pageTitle='Login';

    this.login=function(user){
        userData.login(user);
    }
}]);