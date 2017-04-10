global.jQuery = require('jquery');
require('angular');
require('bootstrap/dist/css/bootstrap.min.css');
require('angular-material/angular-material.min.css');
require('../style/app.css');
require('bootstrap');
require('angular-translate');
require('angular-ui-router');
require('angular-resource');
require('angular-sanitize');
require('angular-translate-storage-cookie');
require('angular-translate-storage-local');
require('angular-cookies');
require('angular-ui-bootstrap');
require('angular-material');
require('angular-messages');

angular.module('app', ['pascalprecht.translate', 'ui.router', 'ngResource', 'ngSanitize', 'ngCookies', 'ui.bootstrap',
    'ngMaterial', 'ngMessages'])
    .config(['$translateProvider', '$stateProvider', '$urlRouterProvider',
        function ($translateProvider, $stateProvider, $urlRouterProvider) {

            $stateProvider.state('main', {
                url: '/fc-learn',
                component: 'fcMain'
            }).state('about', {
                url: '/about',
                component: 'fcAbout'
            }).state('main.login', {
                url: '/login',
                component: 'fcLoginFormOpener'
            }).state('categories', {
                url: '/categories',
                component: 'fcCategoryList'
            }).state('topics', {
                url: '/categories/:categoryId/topics',
                component: 'fcTopicList'
            }).state('collections', {
                url: '/categories/topics/:topicId/collections',
                component: 'fcCollectionList'
            }).state('cards', {
                url: '/categories/topics/collections/:collectionId/cards',
                component: 'fcCardList'
            }).state('card', {
                url: '/categories/topics/collections/cards/:id',
                component: 'fcCard'
            });

            $urlRouterProvider.otherwise('/fc-learn');

            $translateProvider.translations('en_US', require('./resources/locale-en_US.json'))
                .translations('ru_RU', require('./resources/locale-ru_RU.json'))
                .preferredLanguage('en_US')
                .useLocalStorage();

        }]);

require('./components/lang/lang.controller.js');
require('./components/main-page/main-page.controller');
require('./common/modal-service');
require('./common/user-service');
require('./components/login/login-form-opener.controller.js');
require('./common/category-service');
require('./components/category-list/category-list.controller.js');
require('./components/about-page/about-page.controller.js');
require('./common/topic-service');
require('./components/topic-list/topic-list.controller.js');
require('./components/category/category.controller.js');
require('./components/topic/topic.controller.js');
require('./common/collection-service');
require('./components/collection-list/collection-list.controller.js');
require('./common/card-service');
require('./components/card-list/card-list.controller.js');
require('./components/collection/collection.controller.js');
require('./components/card/card.controller.js');