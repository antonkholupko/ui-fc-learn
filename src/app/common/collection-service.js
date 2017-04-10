angular.module('app')
    .service('collectionService', ['$resource', function ($resource) {

        var collectionResource = $resource(SERVER_URL + '/categories/topics/:topicId/collections/:id', {
            topicId: '@topicId',
            id: '@id'
        }, {
            'update': {
                method: 'PUT'
            }
        });

        this.getCollections = function (topicId, page, size) {
            return collectionResource.query({topicId: topicId, page: page, size: size}).$promise;
        };

        this.getCollection = function (id) {
            return collectionResource.get({id: id}).$promise;
        };

    }]);