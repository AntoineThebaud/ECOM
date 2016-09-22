(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.factory('Utilisateur', function ($resource) {
		return $resource('http://localhost:8080/HarmonixWeb/rest/utilisateurs/', {
			
		}, {
		    stripTrailingSlashes: false
		});
	});
})();
