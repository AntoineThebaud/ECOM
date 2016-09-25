(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('categorieController', function(Instrument, $routeParams) {
		var vm = this;
		vm.instruments = [];
		
		//génerère le contenu du filtre par marque //TODO : code duppliqué (catégorie, promos)
		vm.getCurrentMarques = function() {
			var tab = [];
			var brand;
			for(var i = 0; i < vm.allInstruments.length; ++i) {
				brand = vm.allInstruments[i].fabricant;
				if(tab.indexOf(brand) == -1) {
					tab.push(brand);
				}				
			}
			return tab;
		};
		
		vm.displayBrand = function(selected_brand) {
			//réinitialisation du tableau avant traitement
			vm.displayedInstruments = vm.allInstruments.slice();
			if(selected_brand == "Toutes les marques") return;	
			for(var i = 0; i < vm.displayedInstruments.length; i++) {
				if(vm.displayedInstruments[i].fabricant != selected_brand) {
					vm.displayedInstruments.splice(i,1);
					--i;
				}
			}
		}

		var getInstruments = Instrument.query({categorie: $routeParams.TYPE}, function() {
			vm.allInstruments = getInstruments;
			vm.displayedInstruments = vm.allInstruments.slice();
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
		
		//fonction pour affichage etoiles //TODO : code duppliqué (promos, catégorie, ficheProduit)
		vm.range=function(min,max,step){
			step = step || 1;
			var input = [];
		    for (var i = min; i <= max; i += step) {
		        input.push(i);
		    }
		    return input;
		};
	});
})();