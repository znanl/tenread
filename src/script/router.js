angular.module('TenRead', ['ui.router', 'TenRead.Controllers'])

    .config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise(function ($injector, $location) {
            if (location.hash == '' && location.pathname == "/option.html") {
                location.href = location.href + '/#/option'
            } else {
                location.href = location.href + '/#/popup'
            }
        });

        //
        // Now set up the states
        $stateProvider
            .state('popup', {
                url        : "/popup",
                templateUrl: "/template/popup.html",
                controller : 'PopupCtrl'
            })
            .state('option', {
                url        : "/option",
                templateUrl: "/template/option.html",
                controller : 'OptionCtrl'
            })
            .state('background', {
                url        : "/background",
                templateUrl: "/template/option.html"
            })

    });