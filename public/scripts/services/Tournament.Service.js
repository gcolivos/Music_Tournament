googleAuthApp.service('TourneyService', ['$http', function($http){

    var self = this;
    self.tourneySongs = { list: []};

    // Get all song data for tourney songs view

    self.getTourneySongs = function () {
        $http({
          method:'GET',
          url:'/tournament/songs'
        }).then(function (response) {
          self.tourneySongs.list = response.data;
          console.log(self.tourneySongs.list);
        });
      };
}