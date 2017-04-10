angular.module('app')
    .service('cardService', ['$resource', function ($resource) {

        var cardResource = $resource(SERVER_URL + '/categories/topics/collections/:collectionId/cards/:id', {
            collectionId: '@collectionId',
            id: '@id'
        }, {
            'update': {
                method: 'PUT'
            }
        });

        this.getCards = function (collectionId, page, size) {
            return cardResource.query({collectionId: collectionId, page: page, size: size}).$promise;
        };

        this.getCard = function (id) {
            return cardResource.get({id: id}).$promise;
        };

    }]);