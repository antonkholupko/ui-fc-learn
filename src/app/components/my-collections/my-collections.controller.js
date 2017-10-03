angular.module('app')
    .component('fcMyCollections', {
        controller: ['collectionService', 'topicService', '$stateParams','$state','trainingService', '$cookies',
            function (collectionService, topicService, $stateParams, $state, trainingService,$cookies) {

                var ctrl = this;

                ctrl.$onInit = function () {

                    trainingService.getUserCollections($cookies.get("userId")).then(function (result) {
                        ctrl.collections = result;
                    }).catch(function () {

                    });
                };

                ctrl.viewCards = function (collectionId) {
                    $state.go('training', {collectionId: collectionId});
                };

            }],
        template: require('./my-collections.template.html'),
        controllerAs: 'myCollectionCtrl'
    });