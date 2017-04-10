angular.module('app')
    .component('fcLoginForm', {
        controller: ['userService', '$state',
            function (userService, $state) {

                var ctrl = this;

                ctrl.signIn = function () {
                    userService.loginUser(ctrl.login, ctrl.password).then(function (result) {
                        ctrl.close({$value: result.id});
                    }).catch(function () {
                        ctrl.dismiss({$value: 'error'});
                    });
                };

                ctrl.cancel = function () {
                    ctrl.dismiss({$value: 'cancel'});
                    $state.go('main');
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