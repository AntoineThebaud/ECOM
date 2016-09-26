(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('nouveautesController', function(Instrument, $scope, $routeParams) {
		var vm = this;
		vm.instruments = [];
		
		//Filtre par marque : génerère le contenu du select //TODO : code duppliqué (catégorie, promos)
		vm.getCurrentMarques = function() {
			var tab = [];
			var brand;
			for(var i = 0; i < vm.instruments.length; ++i) {
				brand = vm.instruments[i].fabricant;
				if(tab.indexOf(brand) == -1) {
					tab.push(vm.instruments[i].fabricant);
				}				
			}
			return tab;
		};
		
		//Filtre par marque : afficher seulement les instruments qui correspondent au filtre
		vm.displayBrand = function(selected_brand) {
			//réinitialisation du tableau avant traitement
			vm.displayedInstruments = vm.instruments.slice();
			if(selected_brand == "Toutes les marques") return;	
			for(var i = 0; i < vm.displayedInstruments.length; i++) {
				if(vm.displayedInstruments[i].fabricant != selected_brand) {
					vm.displayedInstruments.splice(i,1);
					--i;
				}
			}
		}

		var getNouveautes = Instrument.query({id: "nouveautes"}, function() {
			vm.instruments = getNouveautes;
			vm.displayedInstruments = vm.instruments.slice();
			//init filtre marque
			vm.marques = vm.getCurrentMarques();
			$scope.selected_brand = "Toutes les marques";
		});
		
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