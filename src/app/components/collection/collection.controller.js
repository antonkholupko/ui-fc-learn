angular.module('app')
    .component('fcCollection', {
        controller: ['collectionService', '$stateParams',
            function (collectionService, $stateParams) {

                var ctrl = this;

                collectionService.getCollection($stateParams.collectionId).then(function (result) {
                    ctrl.collection = result;
                }).catch(function () {

                });
            }],
        template: require('./collection.template.html'),
        controllerAs: 'singleCollectionCtrl'
    });