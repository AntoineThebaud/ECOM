(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.factory('Utilisateur', function ($resource) {
		return $resource('rest/utilisateurs/:mail/:password', {
			mail: '@mail',
			password: '@password'
		}, {
		    stripTrailingSlashes: false
		});
	});
})();
