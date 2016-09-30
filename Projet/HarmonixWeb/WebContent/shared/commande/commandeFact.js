(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.factory('Commande', function ($resource) {
			update: {
				method: 'PUT' // this method issues a PUT request
			}
		}, {
		    stripTrailingSlashes: false
		});
	});
})();
