/**
 * Created by darin on 1/6/2015.
 */
adsApp.factory('userData', ['$resource', '$location', 'baseServiceUrl', 'authentication', function ($resource, $location, baseServiceUrl, authentication) {

    //var resource=$resource(baseServiceUrl, paramDefault, actions)
    function registerUser(user) {
        return $resource(baseServiceUrl + 'user/register')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(data);
            });
    }

    function loginUser(user) {
        return $resource(baseServiceUrl + 'user/login')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(data);
            });
    }

    function logoutUser() {
        return $resource(baseServiceUrl + 'user/login')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.removeUser(data);
            });
    }

    function removeUser() {
        localStorage.removeItem(key);
    }

    function isAdmin() {
        //var isAdmin=getUserData.isAdmin;
        //return isAdmin;
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser,
        removeUser: removeUser,
        isAdmin: isAdmin
    }
}])