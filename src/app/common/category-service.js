angular.module('app')
    .service('categoryService', ['$resource', function ($resource) {

        var categoryResource = $resource(SERVER_URL + '/categories/:id', {id: '@id'}, {
            'update': {
                method: 'PUT'
            }
        });

        this.getCategories = function (page, size) {
            return categoryResource.query({page: page, size: size}).$promise;
        };

        this.getCategory = function (id) {
            return categoryResource.get({id: id}).$promise;
        };

    }]);