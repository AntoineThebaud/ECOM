(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.factory('Instrument', function ($resource) {
		return $resource('rest/instruments/:id', { id: '@_id' }, {
			update: {
				method: 'PUT' // this method issues a PUT request
			}
		}, {
		    stripTrailingSlashes: false
		});
	});
})();
