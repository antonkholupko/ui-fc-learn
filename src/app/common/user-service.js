angular.module('app')
    .service('userService', ['$resource', function ($resource) {

        var userResource = $resource(SERVER_URL + '/users/:id', {id: '@id'}, {
            'update': {
                method: 'PUT'
            }
        });

        this.getUsers = function (page, size) {
            return userResource.query({page: page, size: size}).$promise;
        };

        this.getUser = function (id) {
            return userResource.get({id: id}).$promise;
        };

        this.loginUser = function (login, password) {
            return userResource.get({login: login, password: password}).$promise;
        };

        this.registerUser = function (user) {
            return userResource.save(user).$promise;
        };

    }]);