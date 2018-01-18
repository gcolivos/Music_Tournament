googleAuthApp.controller('tournamentController', ['$http', '$scope', '$timeout', 'AuthFactory', '$location', 'TourneyBuilder', function ($http, $scope, $timeout, AuthFactory, $location, TourneyBuilder) {
  console.log('this is the tournamentController');
  var vm = this;
  var authFactory = AuthFactory;
  vm.tourneyBuilder = TourneyBuilder;
  vm.getTourney = TourneyBuilder.getTourney;
  vm.voteFunc = function () {
    alert("Votes submitted!")
  }

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

        $location.path('/tournament');


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
