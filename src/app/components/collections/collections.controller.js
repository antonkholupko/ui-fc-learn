angular.module('app')
    .component('fcCollectionList', {
        controller: ['collectionService', '$stateParams','$state',
            function (collectionService, $stateParams, $state) {

                var ctrl = this;

                collectionService.getCollections($stateParams.topicId).then(function (result) {
                    ctrl.collections = result;
                }).catch(function () {

                });

                ctrl.viewCards = function (collectionId) {
                    $state.go('cards', {categoryId: $stateParams.categoryId, topicId: $stateParams.topicId, collectionId: collectionId});
                };
            }],
        template: require('./collection-list.template.html'),
        controllerAs: 'collectionCtrl'
    });