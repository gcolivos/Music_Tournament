googleAuthApp.service('archiveService', ['$http', '$location', function ($http, $location) {
    console.log('TourneyBuilder Loaded');

    var self = this;

    self.tournament = {list: [] };

    // self.getTourney = function() {
    //     $http({
    //         method: 'GET',
    //         url: '/tournament'
    //     }).then(function (response) {
    //         console.log ('getting the tournament data')
    //         self.tournament.data = response.data
    //     });
    // };

    



}]);