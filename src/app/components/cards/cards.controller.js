angular.module('app')
    .component('fcCardList', {
        controller: ['cardService', '$stateParams', '$state',
            function (cardService, $stateParams, $state) {

                var ctrl = this;

                cardService.getCards($stateParams.collectionId).then(function (result) {
                    ctrl.cards = result;
                }).catch(function () {

                });

                ctrl.viewCard = function (id) {
                    $state.go('card', {categoryId: $stateParams.categoryId, topicId: $stateParams.topicId,
                        collectionId: $stateParams.collectionId, id: id});
                };
            }],
        template: require('./card-list.template.html'),
        controllerAs: 'cardCtrl'
    });