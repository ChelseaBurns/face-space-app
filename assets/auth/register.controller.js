angular
	.module('face-space-app')

	.controller('RegisterCtrl', function ($rootScope, $scope, $location, API_URL) {
    var vm = this;

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
