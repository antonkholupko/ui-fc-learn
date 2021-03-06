angular.module('app')
    .component('fcCategoryList', {
        controller: ['categoryService',
            function (categoryService) {

                var ctrl = this;

                categoryService.getCategories().then(function (result) {
                    ctrl.categories = result;
                }).catch(function () {

                });
            }],
        template: require('./categories.template.html'),
        controllerAs: 'categoryCtrl'
    });