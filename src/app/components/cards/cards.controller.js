angular.module('app')
    .component('fcCardList', {
        controller: ['cardService', 'collectionService', '$stateParams', '$state',
            function (cardService, collectionService, $stateParams, $state) {

                var ctrl = this;

                ctrl.$onInit = function () {
                    collectionService.getCollection($stateParams.topicId, $stateParams.collectionId).then(function (result) {
                        ctrl.collection = result;
                    }).catch(function () {

                    });
                    cardService.getCards($stateParams.collectionId).then(function (result) {
                        ctrl.cards = result;
                    }).catch(function () {

                    });
                };

                ctrl.viewCard = function (id) {
                    $state.go('card', {categoryId: $stateParams.categoryId, topicId: $stateParams.topicId,
                        collectionId: $stateParams.collectionId, id: id});
                };

            }],
        template: require('./cards.template.html'),
        controllerAs: 'cardCtrl'
    });