angular.module('app')
    .component('fcCardList', {
        controller: ['cardService', '$stateParams',
            function (cardService, $stateParams) {

                var ctrl = this;

                cardService.getCards($stateParams.collectionId).then(function (result) {
                    ctrl.cards = result;
                }).catch(function () {

                });
            }],
        template: require('./card-list.template.html'),
        controllerAs: 'cardCtrl'
    });