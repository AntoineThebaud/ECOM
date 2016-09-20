(function () {
	"use strict";
	
	var module = angular.module("app"); //retrieve the module named "app"
	
	module.controller('headerController', function(Panier) {
		var vm = this;
		
		//récupère le panier
		vm.panier = Panier.monPanier;
	});
})();