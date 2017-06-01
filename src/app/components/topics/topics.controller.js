angular.module('app')
    .component('fcTopicList', {
        controller: ['topicService', '$stateParams', '$state',
            function (topicService, $stateParams, $state) {

                var ctrl = this;

                topicService.getTopics($stateParams.categoryId).then(function (result) {
                    ctrl.topics = result;
                }).catch(function () {

                });

                this.viewCollections = function (topicId) {
                    $state.go('collections',{categoryId: $stateParams.categoryId, topicId: topicId});
                };
            }],
        template: require('./topic-list.template.html'),
        controllerAs: 'topicCtrl'
    });