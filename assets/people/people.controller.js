angular
  .module('face-space-app')

  .controller('PeopleCtrl', function ($rootScope, $location, Person) {
    var vm = this;

    Person.getAll(function (people) {
      vm.people = people;
    });

    vm.onModalLoad = function () {};
  });
