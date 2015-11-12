angular
	.module('face-space-app')

	.config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'assets/views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        resolve: {
          checkLogin: function ($rootScope, $location) {
            if ($rootScope.auth) {
              $location.path('/people')
            }
          }
        }
      })

      .when('/register', {
        templateUrl: 'assets/views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'auth',
        resolve: {
          checkLogin: function ($rootScope, $location) {
            if ($rootScope.auth) {
              $location.path('/people')
            }
          }
        }
      })
      .when('/people', {
        templateUrl: 'assets/views/people.html',
        resolve: {
          checkLogin: function ($rootScope, $location) {
            if ($rootScope.auth) {
              $location.path('/people')
            }
          }
        }
      })

      .when('/logout', {
        template: '<h1>Logging out...</h1>',
        controller: 'LogoutCtrl'
      });
  });
