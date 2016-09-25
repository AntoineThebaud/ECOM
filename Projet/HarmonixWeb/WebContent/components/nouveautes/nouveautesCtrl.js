(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('nouveautesController', function(Instrument, $routeParams) {
		var vm = this;
		vm.instruments = [];
		
		//génerère le contenu du filtre par marque //TODO : code duppliqué (catégorie, promos)
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

		var getInstruments = Instrument.query({id: "nouveautes"}, function() {
			vm.instruments = getInstruments;
			vm.marques = vm.getCurrentMarques();
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