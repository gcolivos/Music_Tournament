googleAuthApp.controller('studentController', ['$http', '$scope', '$timeout', 'AuthFactory', '$location', function ($http, $scope, $timeout, AuthFactory, $location) {
  console.log('this is the studentController');
  var vm = this;
  var authFactory = AuthFactory;

  authFactory.isLoggedIn()
    .then(function (response) {
      if (response.data.status) {
        vm.displayLogout = true;
        authFactory.setLoggedIn(true);
        console.log(response.data);
        vm.username = response.data.name;
        vm.email = response.data.email;
        vm.id = response.data.id;
        vm.image = response.data.image;

        $location.path('/students');


      } else { // is not logged in on server
        vm.displayLogout = false;
        authFactory.setLoggedIn(false);
      }
    },

    function () {
      vm.message.text = 'Unable to properly authenticate user';
      vm.message.type = 'error';
    });

}]);
