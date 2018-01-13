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

  //start get student slips
  vm.getStudentSlips = function () {
    console.log('getstudentslips', vm.email);
    $http({
      method: 'GET',

      url: '/private/student/slips/' + vm.email

    }).then(function (response) {
      console.log('in vmgetstudentslips', response);
      vm.studentSlips = response.data.length;
      // console.log(response.data);
    });
  };//end of getStudentList

  // vm.getStudentSlips();



  //start post student slips
  vm.postStudentSlip = function () {
    // vm.modalValue = true;

    $http({
      url: '/private/student/check/' + vm.slipKey,
      method: 'GET'
    }).then(function success(response) {
      console.log('This is the response', response.data);
      if (response.data.isNotUsed === true) {
        var objectToSend = {
          slip_number: vm.slipKey,
          s: vm.s,
          o: vm.o,
          a: vm.a,
          r: vm.r,
          student_id: vm.id,
          date_entered: new Date()
        };
        console.log('this is the object I am sending:', objectToSend);

        $http({
          method: 'POST',
          url: '/private/student',
          data: objectToSend
        }).then(function success(response) {
          swal({
            title: "Nice job!",
            text: "You have successfully entered a SOAR slip! Keep up the good work!",
            imageUrl: "https://s-media-cache-ak0.pinimg.com/736x/25/b9/24/25b924f1d18fea2c7dfcb26a9905c1e8--funny-emoji-emoji-png.jpg"
          });
          vm.getStudentSlips();
          console.log(response);
          vm.slipKey = '';
          vm.s = false;
          vm.o = false;
          vm.a = false;
          vm.r = false;

        }, function failure(response) {
          console.log(response);
        });
      }
      else {
        //Make this into an alert or a message
        console.log('Try again! Slip was already used!');
        swal({
          title: "Oops..",
          text: "Looks like this slip number has already been used!",
          imageUrl: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/crying-face.png"
        });
        // vm.modalValue = false;

      }
    }, function failure(response) {
      swal({
        title: "Oops..",
        text: "Looks like this slip number does not exist!",
        imageUrl: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/crying-face.png"
      });
      // vm.modalValue = false;

      console.log(response);
    });
    vm.getStudentSlips();

  };//end of postStudentSlips

}]);
