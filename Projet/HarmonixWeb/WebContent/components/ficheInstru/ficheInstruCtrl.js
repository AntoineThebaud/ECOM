(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('instrumentController', function(Instrument, $routeParams) {
		//console.log($routeParams);
		var vm = this;
		vm.id = $routeParams.ID;

		var product = Instrument.get({"id": $routeParams.ID}, function() {
			vm.modele = product.nom;			
			vm.marque = product.fabricant;
			vm.image = product.images;
			vm.prix = product.prix;			
			vm.specs = {
				"Poids": product.poids,
				"Type": product.type,
				"Catégorie": product.categorie
			}
			//ajouter la note !
		});
	});
})();

// Récupère l'instrument en question
//var getInstru = Instrument.get(158, function(data) {
//	//TODO
//	$scope.instruments = getinstru;
//});