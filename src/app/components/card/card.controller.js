angular.module('app')
    .component('fcCard', {
        controller: ['cardService', '$stateParams',
            function (cardService, $stateParams) {

                var ctrl = this;

                cardService.getCard($stateParams.id).then(function (result) {
                    ctrl.card = result;
                }).catch(function () {

                });
            }],
        template: require('./card.template.html'),
        controllerAs: 'singleCardCtrl'
    });