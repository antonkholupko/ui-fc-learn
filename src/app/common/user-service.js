angular.module('app')
    .service('userService', ['$resource', 'session', '$httpParamSerializerJQLike',
        function ($resource, session, $httpParamSerializerJQLike) {

            var registrationResource = $resource(SERVER_URL + '/registration');
            var loginationResource = $resource(SERVER_URL + '/login', {}, {
                save: {
                    method: "POST",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    transformRequest: function (data) {
                        return $httpParamSerializerJQLike(data);
                    }
                }
            });
            var userResource = $resource(SERVER_URL + '/users/:name', {name: '@name'}, {
                'update': {
                    method: 'PUT'
                }
            });

            this.registerUser = function (user) {
                return registrationResource.save(user).$promise;
            };

            this.login = function (credentials) {
                credentials.submit = "Login";
                credentials.username = credentials.login;
                credentials.login = null;

                return loginationResource.save(credentials).$promise;

                /*.then(function () {
                    return getUser(credentials.login).then(function (res) {
                        session.create(res.sessionId, res.id, "editor");
                        return res;
                    });
                });*/
            };

            this.getUser = function (name) {
                return userResource.get({name: name}).$promise;
            };

            this.isAuthenticated = function () {
                return !!session.userId;
            };

            this.isAuthorized = function (authorizedRoles) {
                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }
                return (userService.isAuthenticated() &&
                authorizedRoles.indexOf(session.userRole) !== -1);
            };

        }])
    .service('session', function () {
        this.create = function (sessionId, userId, userRole) {
            this.id = sessionId;
            this.userId = userId;
            this.userRole = userRole;
        };
        this.destroy = function () {
            this.id = null;
            this.userId = null;
            this.userRole = null;
        };
    });
