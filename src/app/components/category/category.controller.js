angular.module('app')
    .component('fcCategory', {
        controller: ['categoryService', '$stateParams',
            function (categoryService, $stateParams) {

                var ctrl = this;

                categoryService.getCategory($stateParams.categoryId).then(function (result) {
                    ctrl.category = result;
                }).catch(function () {

                });
            }],
        template: require('./category.template.html'),
        controllerAs: 'singleCategoryCtrl'
    });