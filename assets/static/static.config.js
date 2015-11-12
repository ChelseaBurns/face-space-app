angular
  .module('face-space-app')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/views/landing.html'
      })
      .when('/contact', {
        templateUrl: 'assets/views/contact.html'
      })
      .when('/about', {
        templateUrl: 'assets/views/about.html'
      })
      .when('/login', {
        templateUrl: 'assets/views/login.html'
      })
      .when('/people', {
        templateUrl: 'assets/views/people.html'
      })
      .when('/register', {
        templateUrl: 'assets/views/register.html'
      })
      .otherwise({
        templateUrl: 'assets/views/404.html'
      });
  });
