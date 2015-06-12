'use strict';

angular.module('face-space-app').controller('PeopleCtrl', function ($rootScope, $location, Person) {
  var vm = this;

  Person.getAll(function (people) {
    vm.people = people;
  });

  vm.onModalLoad = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvcGVvcGxlL3Blb3BsZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUV4QixVQUFVLENBQUMsWUFBWSxFQUFFLFVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7QUFDakUsTUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztBQUVkLFFBQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDOUIsTUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7R0FDcEIsQ0FBQyxDQUFDOztBQUVILElBQUUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxFQUFFLENBQUM7Q0FDakMsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hc3NldHMvcGVvcGxlL3Blb3BsZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdmYWNlLXNwYWNlLWFwcCcpXG5cbiAgLmNvbnRyb2xsZXIoJ1Blb3BsZUN0cmwnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCBQZXJzb24pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgUGVyc29uLmdldEFsbChmdW5jdGlvbiAocGVvcGxlKSB7XG4gICAgICB2bS5wZW9wbGUgPSBwZW9wbGU7XG4gICAgfSk7XG5cbiAgICB2bS5vbk1vZGFsTG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xuICB9KTtcbiJdfQ==