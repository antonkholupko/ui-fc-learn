angular.module('app')
    .service('collectionService', ['$resource', function ($resource) {

        var collectionResource = $resource(SERVER_URL + '/topics/:topicId/collections/:id', {
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

        this.getCollection = function (topicId, id) {
            return collectionResource.get({topicId: topicId, id: id}).$promise;
        };

    }]);