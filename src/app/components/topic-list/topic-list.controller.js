angular.module('app')
    .component('fcTopicList', {
        controller: ['topicService', '$stateParams',
            function (topicService, $stateParams) {

                var ctrl = this;

                topicService.getTopics($stateParams.categoryId).then(function (result) {
                    ctrl.topics = result;
                }).catch(function () {

                });
            }],
        template: require('./topic-list.template.html'),
        controllerAs: 'topicCtrl'
    });