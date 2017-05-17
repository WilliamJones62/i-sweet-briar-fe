(function() {

  'use strict';

  angular
    .module('authApp')
    .directive('lessons', lessons);

  function lessons() {
    return {
      templateUrl: 'components/lessons/lessons.tpl.html',
      controller: lessonsController,
      controllerAs: 'lessons'
    }
  }

  function lessonsController(auth, store, $location) {
    var vm = this;
    vm.current = current;
    vm.auth = auth;

    function current() {
      // The users current lesson must retrieved and displayed
        return $http.get('/users/', {params: { token: token, lesson: lesson }})
                    .then(handleResponse)
                    .catch(handleError)
      }
      })

    }

  }

})();
