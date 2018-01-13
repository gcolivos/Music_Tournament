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
      controller: "userController as sc"
    })
    .otherwise({
      redirectTo: '/login'
    });
},
]);
