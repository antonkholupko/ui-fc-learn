angular.module('app')
    .service('topicService', ['$resource', function ($resource) {

        var topicResource = $resource(SERVER_URL + '/categories/:categoryId/topics/:id', {
            categoryId: '@categoryId',
            id: '@id'
        }, {
            'update': {
                method: 'PUT'
            }
        });
   
        this.getTopics = function (categoryId, page, size) {
            return topicResource.query({categoryId: categoryId, page: page, size: size}).$promise;
        };

        this.getTopic = function (categoryId, id) {
            return topicResource.get({categoryId: categoryId, id: id}).$promise;
        };

    }]);