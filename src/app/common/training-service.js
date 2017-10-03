angular.module('app')
    .service('trainingService', ['$resource', function ($resource) {

        var trainingRes = $resource(SERVER_URL + '/users/:userId/collections/:collectionId/training/card', {
            userId: '@userId',
            collectionId: '@collectionId'
        });

        var knownRes = $resource(SERVER_URL + '/users/:userId/cards/:cardId/known', {
            userId: '@userId',
            cardId: '@cardId'
        });

        var unknownRes = $resource(SERVER_URL + '/users/:userId/cards/:cardId/unknown', {
            userId: '@userId',
            cardId: '@cardId'
        });

        var userCollections = $resource(SERVER_URL +'/users/:userId/collections/:collectionId',{
            userId: '@userId',
            collectionId: '@collectionId'
        });

        this.getCard = function (userId, collectionId) {
            return trainingRes.get({userId: userId, collectionId: collectionId}).$promise;
        };

        this.known = function (userId, cardId) {
            return knownRes.get({userId: userId, cardId: cardId}).$promise;
        };

        this.unknown = function (userId, cardId) {
            return unknownRes.get({userId: userId, cardId: cardId}).$promise;
        };

        this.getUserCollections = function (userId) {
            return userCollections.query({userId: userId}).$promise;
        };

        this.addUserCollection = function (userId, collectionId) {
            return userCollections.get({userId: userId, collectionId: collectionId}).$promise;
        };

    }]);