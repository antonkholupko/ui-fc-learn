angular.module('app')
    .component('fcMain', {
        controller: ['modalService', function (modalService) {

            var ctrl = this;

            ctrl.openLoginForm = function () {
                modalService.loginModal().then(function (id) {
                    //$state.go('oneNews', {'id': id}, {reload: true});
                });
            };
        }],
        template: require('./main-page.template.html'),
        controllerAs: 'mainCtrl'
    });

require('./../carousel/carousel.controller.js');
