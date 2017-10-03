angular.module('app')
    .controller('fcApplicationController', function ($scope, USER_ROLES, userService, $timeout, $mdSidenav, $cookies, $interval, $rootScope) {

        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = userService.isAuthorized;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
            this.currentUser = user;
        };

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        $scope.getUser = function() {
            return $scope.currentUser;
        };

        $interval(function(){
            $scope.currentUser = $cookies.getObject("currentUser");
            $rootScope.currentUser = $cookies.getObject("currentUser");
        }, 500);

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
    });