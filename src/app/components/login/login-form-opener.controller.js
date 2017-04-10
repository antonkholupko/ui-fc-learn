angular.module('app')
    .component('fcLoginFormOpener', {
        controller: ['modalService', function (modalService) {

            this.$onInit = function () {
                modalService.loginModal().then(function (id) {
                    //$state.go('oneNews', {'id': id}, {reload: true});
                });
            };
        }]
    });
