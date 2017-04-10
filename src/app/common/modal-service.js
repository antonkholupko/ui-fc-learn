require('./../components/login-form/login-form.controller');

angular.module('app')
    .service('modalService', ['$uibModal', function ($uibModal) {

        this.loginModal = function () {
            return $uibModal.open({
                component: 'fcLoginForm',
                size: 'md',
                backdrop  : 'static',
                keyboard  : false
            }).result;
        };
    }]);

