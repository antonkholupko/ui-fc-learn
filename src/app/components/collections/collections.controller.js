angular.module('app')
    .component('fcCollectionList', {
        controller: ['collectionService', 'topicService', '$stateParams','$state', 'trainingService', '$cookies',
            function (collectionService, topicService, $stateParams, $state, trainingService, $cookies) {

                var ctrl = this;

                ctrl.$onInit = function () {
                    topicService.getTopic($stateParams.categoryId, $stateParams.topicId).then(function (result) {
                        ctrl.topic = result;
                    }).catch(function () {

                    });

                    collectionService.getCollections($stateParams.topicId).then(function (result) {
                        ctrl.collections = result;
                    }).catch(function () {

                    });
                };

                ctrl.viewCards = function (collectionId) {
                    $state.go('cards', {categoryId: $stateParams.categoryId, topicId: $stateParams.topicId, collectionId: collectionId});
                };

                ctrl.addToMine = function (collectionId) {
                    trainingService.addUserCollection($cookies.get("userId"), collectionId).then(function (result) {
                        $state.go('myCollections', {});
                    }).catch(function () {

                    });
                };

            }],
        template: require('./collections.template.html'),
        controllerAs: 'collectionCtrl'
    });