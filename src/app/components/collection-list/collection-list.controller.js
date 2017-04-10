angular.module('app')
    .component('fcCollectionList', {
        controller: ['collectionService', '$stateParams',
            function (collectionService, $stateParams) {

                var ctrl = this;

                collectionService.getCollections($stateParams.topicId).then(function (result) {
                    ctrl.collections = result;
                }).catch(function () {

                });
            }],
        template: require('./collection-list.template.html'),
        controllerAs: 'collectionCtrl'
    });