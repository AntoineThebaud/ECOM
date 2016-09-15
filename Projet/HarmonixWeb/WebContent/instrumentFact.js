(function () {
	"use strict";
	
	angular.module('app').factory('Instrument', function($resource) {
		  return $resource('http://localhost:8080/HarmonixWeb/rest/instruments/:id', { id: '@_id' }, {
		    update: {
		      method: 'PUT' // this method issues a PUT request
		    }
		  }, {
		    stripTrailingSlashes: false
		  });
	});
})();