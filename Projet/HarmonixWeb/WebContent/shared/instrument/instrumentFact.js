(function () {
  "use strict";

  angular
   .module('app')
   .factory('Instrument', instrumentFact);

  function instrumentFact($resource) {
    return $resource('http://localhost:8080/TODO');
  }

})();
