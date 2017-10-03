angular.module('app')
    .component('fcTopicList', {
        controller: ['topicService', 'categoryService', '$stateParams', '$state',
            function (topicService, categoryService, $stateParams, $state) {

                var ctrl = this;

                ctrl.$onInit = function () {
                    topicService.getTopics($stateParams.categoryId).then(function (result) {
                        ctrl.topics = result;
                    }).catch(function () {

                    });

                    categoryService.getCategory($stateParams.categoryId).then(function (result) {
                        ctrl.category = result;
                    }).catch(function () {

                    });
                };


                this.viewCollections = function (topicId) {
                    $state.go('collections', {categoryId: $stateParams.categoryId, topicId: topicId});
                };
            }],
        template: require('./topics.template.html'),
        controllerAs: 'topicCtrl'
    });