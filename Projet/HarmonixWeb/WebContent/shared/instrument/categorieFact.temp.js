//temporary file (trouver une meilleure solution!)

(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.factory('Categorie', function ($resource) {	
		return $resource('http://localhost:8080/HarmonixWeb/rest/instruments?categorie=:categorie');
	});
})();
