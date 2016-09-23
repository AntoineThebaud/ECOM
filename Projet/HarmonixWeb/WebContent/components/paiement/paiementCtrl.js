(function () {
	"use strict";

	var module = angular.module("app");
	module.controller('paiementController',  function() {
		var vm = this;
		
		vm.adresse1 = "";
		vm.adresse2 = "";
		vm.codePostal = "";
		vm.ville = "";
		vm.email = "";
		
		vm.stockerInfosPaiement = function(){

		}
		
	});
})();