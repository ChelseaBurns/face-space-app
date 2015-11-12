angular
	.module('face-space-app')

	.controller('LoginCtrl', function ($rootScope, $scope, $location, API_URL) {
    var vm = this;

    vm.login = function () {
      var fb = new Firebase(API_URL);

      fb.authWithPassword({
        email: vm.email,
        password: vm.password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err);
        } else {
          $rootScope.auth = authData;
          $location.path('/people');
          $scope.$apply();
        }
      });

    };

    vm.register = function () {
     var fb = new Firebase(API_URL);

      fb.createUser ({
       email: vm.email,
       password: vm.password
      }, function (error, authData) {
       if (error) {
         console.log("Error creating user", error);
       } else {
         console.log("Successful creation", authData.uid);
         vm.login();
       }
     });

   };
 });
