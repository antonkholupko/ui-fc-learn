angular.module('app')
    .component('fcTopic', {
        controller: ['topicService', '$stateParams',
            function (topicService, $stateParams) {

                var ctrl = this;

                topicService.getTopic($stateParams.topicId).then(function (result) {
                    ctrl.topic = result;
                }).catch(function () {

                });
            }],
        template: require('./topic.template.html'),
        controllerAs: 'singleTopicCtrl'
    });