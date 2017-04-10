angular.module('app')
    .component('fcLang', {
        controller: ['$translate', function ($translate) {

            this.change = function (key) {
                $translate.use(key);
            };

        }],
        template: require('./lang.template.html'),
        controllerAs: 'langCtrl'
    });