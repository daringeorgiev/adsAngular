/**
 * Created by darin on 1/6/2015.
 */
adsApp.factory('userData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){

    //var resource=$resource(baseServiceUrl, paramDefault, actions)
    function registerUser(user){
        return $resource(baseServiceUrl + 'user/register')
            .save(user)
            .$promise
            .then(function (data){
                authentication.saveUser(data);
            });
    }

    function loginUser(user){
        return $resource(baseServiceUrl + 'user/login')
            .save(user)
            .promise
            .then(function (data){
                authentication.saveUser(data);
            });
    }

    function logoutUser(){
        return $resource(baseServiceUrl + 'user/login')
            .save(user)
            .promise
            .then(function (data){
                authentication.saveUser(data);
            });

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])