angular.module('testApp',
    ['ionic', 'testApp.controllers','testApp.services','testApp.filters',
        'testApp.directives'
])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {

            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.mystocks', {
                url: '/my-stocks',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/my-stocks.html',
                        controller: 'MyStocksCtrl'
                    }
                }
            })

            .state('app.stock', {
                url: '/:stockTicker',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/stock.html',
                        controller: 'StockCtrl'
                    }
                }
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/my-stocks');
    });
