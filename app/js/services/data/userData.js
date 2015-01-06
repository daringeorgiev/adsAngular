/**
 * Created by darin on 1/6/2015.
 */
adsApp.factory('userData', ['$resource', 'baseServiceUrl', function($resource){

    //var resource=$resource(baseServiceUrl, paramDefault, actions)
    function registerUser(user){
        console.log(user);
        //return $resource(baseServiceUrl + 'user/register');
        //    .save(user);
    }
    function loginUser(user){

    }
    function logoutUser(user){

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])