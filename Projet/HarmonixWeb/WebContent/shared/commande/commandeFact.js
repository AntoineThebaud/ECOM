(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.factory('Commande', function ($resource) {
		return $resource('../../rest/commandes/:id', { id: '@_id' }, {
			update: {
				method: 'PUT' // this method issues a PUT request
			}
		}, {
		    stripTrailingSlashes: false
		});
	});
})();
