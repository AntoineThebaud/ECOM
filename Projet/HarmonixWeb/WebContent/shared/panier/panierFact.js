(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.factory("Panier", function() {
		  //variable panier accessible depuis toutes les pages du site
		  return {monPanier: new panier()};
	});
})();