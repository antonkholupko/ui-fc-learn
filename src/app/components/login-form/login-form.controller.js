angular.module('app')
    .component('fcLoginForm', {
        controller: ['userService', '$state', '$cookies', '$rootScope', 'AUTH_EVENTS', '$scope', '$stateParams',
            function (userService, $state, $cookies, $rootScope, AUTH_EVENTS, $scope, $stateParams) {

                var ctrl = this;

                ctrl.$onInit = function () {
                    ctrl.user = null;
                    ctrl.regMsg = $stateParams.regMsg;

                };

                ctrl.signIn = function () {
                    ctrl.login = ctrl.user.login;
                    userService.login(ctrl.user).then(function () {
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

                        userService.getUser(ctrl.login).then(function (result) {
                            $cookies.putObject("currentUser", result);
                            $cookies.put("userId", result.id);
                        });
                        ctrl.cancel();

                    }, function () {
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    });
                };

                ctrl.register = function () {
                    userService.registerUser(ctrl.user).then(function (result) {
                        //messageService.showMessage("success", "REG_SUCCESS");
                        ctrl.regMsg = true;
                        ctrl.user = null;
                        ctrl.cancel();
                        $state.go('main.login', {regMsg: true}, {reload: true});
                    }).catch(function (result) {
                        ctrl.user = null;
                        // messageService.showMessage("danger", "REG_ERROR");
                    })
                };

                ctrl.cancel = function () {
                    ctrl.dismiss({$value: 'cancel'});
                    $state.go('main', {}, {reload: true});
                };
            }],

        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        template: require('./login-form.template.html'),
        controllerAs: 'loginFormCtrl'
    });