(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('instrumentController', function($routeParams) {
//		this.idInstrument = $routeParams.idInstrument;
		var vm = this;
		vm.id = $routeParams.ID;
		vm.name = "Super guitare de ouf";
		vm.marque = "GraveReuch";
		vm.image = "FenderSquier.png";
		vm.note = "6/5";
		vm.prix = "999.00";
		vm.specs = {
			"Produit":"Squier Bullet Strat with Tremolo HSS",
			"Référence Squier":"031-0005-506",
			"Catégorie":"Guitare Electrique Solid Body"				
		}
	});
})();

// Récupère l'instrument en question
//var getInstru = Instrument.get(158, function(data) {
//	//TODO
//	$scope.instruments = getinstru;
//});