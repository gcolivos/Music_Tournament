var googleAuthApp = angular.module('theGoogles', ['ngRoute']);

googleAuthApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // $locationProvider.hashPrefix('');

$routeProvider
    .when('/login', {
      templateUrl: '/public/views/templates/login.html',
      controller: 'AuthController',
      controllerAs: 'auth',
    })
    .when('/registers', {
      templateUrl: '/public/views/register.html',
      controller: "registerController as rc"
    })
    .when('/redirect', {
      templateUrl: 'public/views/redirect.html'
    })
    .when('/users', {
      templateUrl: '/public/views/user.html',
      controller: "userController as uc"
    })
    .when('/tournament', {
      templateUrl: '/public/views/tournament.html',
      controller: "tournamentController as tc"
    })
      .when('/archive', {
        templateUrl: '/public/views/archive.html',
        controller: "archiveController as ac"
    })
    .otherwise({
      redirectTo: '/login'
    });
},
]);
