/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('LoginCtrl', ['$scope', '$location', 'userData', function($scope, $location, userData){
    this.pageTitle='Login';

    this.login=function(user){
        userData.login(user)
            .then(function(){
                $location.path('/user/home');
                //notifyService.showInfo('bravo33');
                //$scope.pageTitle='Az';
                console.log('bravo22' + user );
            }, function(){
                console.log('error22');
            }
        );
    }
}]);