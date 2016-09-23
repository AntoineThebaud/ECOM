(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('categorieController', function(Categorie, $routeParams) {
		var vm = this;
		vm.instruments = [];
		
		vm.getCurrentMarques = function() {
			var tab = [];
			for(var i = 0; i < vm.instruments.length; ++i) {
				tab.push(vm.instruments[i].fabricant);
			}
			return tab;
		};

		var getInstruments = Categorie.query({"categorie": $routeParams.TYPE}, function() {
			vm.instruments = getInstruments;
			vm.marques = vm.getCurrentMarques();
		});
		
		vm.categoriesFormat = {
			"modeles-st" : "Modèles ST",
			"modeles-t" : "Modèles T",
			"modeles-single-cut" : "Modèles Single Cut",
			"modeles-double-cut" : "Modèles Double Cut",
			"guitares-metal" : "Guitares Metal", 
			"guitares-7-cordes" : "Guitares 7 Cordes",
			"guitares-8-cordes" : "Guitares 8 Cordes", 
			"guitares-classiques-1-4" : "Guitares classiques 1/4",
			"guitares-classiques-1-2" : "Guitares classiques 1/2",
			"guitares-classiques-3-4" : "Guitares classiques 3/4",
			"guitares-classiques-7-8" : "Guitares classiques 7/8",
			"guitares-classiques-4-4" : "Guitares classiques 4/4",
			"guitares-classiques-electro-acoustiques" : "Guitares classiques électro-acoustiques",
			"guitares-dreadnought" : "Guitares Dreadnought",
			"guitares-dreadnought-electro-acoustiques" : "Guitares Dreadnought électro-acoustiques",
			"guitares-jumbo" : "Guitares Jumbo",
			"guitares-jumbo-electro-acoustiques" : "Guitares Jumbo électro-acoustiques",
			"guitares-000" : "Guitares 000",
			"guitares-000-electro-acoustiques" : "Guitares 000 électro-acoustiques",
			"basses-acoustiques-4-cordes" : "Basses acoustiques 4 cordes",
			"basses-acoustiques-5-cordes" : "Basses acoustiques 5 cordes",
			"basses-acoustiques-fretless" : "Basses acoustiques Fretless",
			"basses-jazz-4-cordes" : "Basses Jazz 4 cordes",
            "basses-jazz-5-cordes" : "Basses Jazz 5 cordes",
            "basses-precision-4-cordes" : "Basses Precision 4 cordes",
            "basses-precision-5-cordes" : "Basses Precision 5 cordes",
            "basses-heavy-4-cordes" : "Basses Heavy 4 cordes",
            "basses-heavy-5-cordes" : "Basses Heavy 5 cordes"
		}
		vm.categorie = vm.categoriesFormat[$routeParams.TYPE];
	});
})();