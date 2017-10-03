angular.module('app')
    .component('fcCard', {
        controller: ['cardService', 'trainingService', '$stateParams', '$cookies', '$state',
            function (cardService, trainingService, $stateParams, $cookies, $state) {

                var ctrl = this;

                ctrl.$onInit = function () {
                    cardService.getCard($stateParams.collectionId, $stateParams.id).then(function (result) {
                        ctrl.card = result;
                        ctrl.displayed = ctrl.card.question;
                    }).catch(function () {
                        trainingService.getCard(1, $stateParams.collectionId).then(function (result) {
                            ctrl.card = result;
                            ctrl.displayed = ctrl.card.question;
                            $state.go('training', {collectionId: $stateParams.collectionId});
                        });
                    });
                };

                ctrl.showAnswer = function () {
                    ctrl.displayed = ctrl.card.answer;
                    ctrl.hideShowAnswerBtn = true;
                };

                ctrl.getNextCard = function (known) {
                    if (known) {
                        trainingService.known($cookies.get("userId"), this.card.id).then(function () {
                            trainingService.getCard(1, $stateParams.collectionId).then(function (result) {
                                ctrl.card = result;
                                ctrl.displayed = ctrl.card.question;
                                ctrl.hideShowAnswerBtn = false;
                                $state.go('training', {collectionId: $stateParams.collectionId});

                            });
                        });
                    } else {
                        trainingService.unknown(1, this.card.id).then(function () {
                            trainingService.getCard(1, $stateParams.collectionId).then(function (result) {
                                ctrl.card = result;
                                ctrl.displayed = ctrl.card.question;
                                ctrl.hideShowAnswerBtn = false;
                                $state.go('training', {collectionId: $stateParams.collectionId});

                            });
                        });
                    }
                };

            }],
        template: require('./card.template.html'),
        controllerAs: 'singleCardCtrl'
    });