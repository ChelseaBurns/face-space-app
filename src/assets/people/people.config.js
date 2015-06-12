angular
  .module('face-space-app')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/people', {
        templateUrl: 'assets/views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'main',
        private: true
      })
      .when('/people/new', {
        templateUrl: 'assets/views/people.html',
        controller: 'NewPersonCtrl',
        controllerAs: 'main',
        private: true
      })
      .when('/people/:id', {
        templateUrl: 'assets/views/person.html',
        controller: 'PersonController',
        controllerAs: 'main',
        private: true
      })
      .when('/people/:id/edit', {
        templateUrl: 'assets/views/person.html',
        controller: 'EditPersonCtrl',
        controllerAs: 'main',
        private: true
      });
  });
