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
    .config(['$httpProvider', '$translateProvider', '$stateProvider', '$urlRouterProvider',
        function ($httpProvider, $translateProvider, $stateProvider, $urlRouterProvider) {

            $httpProvider.defaults.withCredentials = true;

            $stateProvider.state('main', {
                url: '/fc',
                component: 'fcMain'
            }).state('about', {
                url: '/about',
                component: 'fcAbout'
            }).state('main.login', {
                url: '/login',
                component: 'fcLoginFormOpener',
                params: { regMsg: false}
            }).state('categories', {
                url: '/categories',
                component: 'fcCategoryList'
            }).state('topics', {
                url: '/categories/:categoryId/topics',
                component: 'fcTopicList'
            }).state('collections', {
                url: '/categories/:categoryId/topics/:topicId/collections',
                component: 'fcCollectionList'
            }).state('cards', {
                url: '/categories/:categoryId/topics/:topicId/collections/:collectionId/cards',
                component: 'fcCardList'
            }).state('card', {
                url: '/categories/:categoryId/topics/:topicId/collections/:collectionId/cards/:id',
                component: 'fcCard'
            }).state('myCollections', {
                url: '/collections',
                component: 'fcMyCollections'
            }).state('training', {
                url: '/training',
                component: 'fcCard',
                params: { collectionId: 1}
            });

            $urlRouterProvider.otherwise('/fc');

            $translateProvider.translations('en_US', require('./resources/locale-en_US.json'))
                .translations('ru_RU', require('./resources/locale-ru_RU.json'))
                .preferredLanguage('en_US')
                .useLocalStorage();

        }])
    .run(function ($rootScope, AUTH_EVENTS, userService) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            var authorizedRoles = next.data.authorizedRoles;
            if (!userService.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (userService.isAuthenticated()) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                } else {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            }
        });
    })
    .constant("errorCodes", {
        "NOT_FOUND_CODE": 404,
        "BAD_REQUEST_CODE": 400
    })
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })
    .constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        editor: 'editor'
    });

require('./components/lang/lang.controller.js');
require('./components/my-collections/my-collections.controller');
require('./components/main-page/main-page.controller');
require('./common/modal-service');
require('./common/user-service');
require('./components/login/login-form-opener.controller.js');
require('./common/category-service');
require('./common/training-service');
require('./components/categories/categories.controller.js');
require('./components/about-page/about-page.controller.js');
require('./common/topic-service');
require('./components/topics/topics.controller.js');
require('./common/collection-service');
require('./components/collections/collections.controller.js');
require('./common/card-service');
require('./components/cards/cards.controller.js');
require('./components/card/card.controller.js');
require('./app-controller.js');
