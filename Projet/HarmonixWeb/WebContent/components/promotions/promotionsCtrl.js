(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('promotionsController', function(Instrument, $routeParams) {
		var vm = this;
		vm.instruments = [];
		
		vm.range=function(min,max,step){
			step = step || 1;
			var input = [];
		    for (var i = min; i <= max; i += step) {
		        input.push(i);
		    }
		    return input;
		};
		
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

		var getInstruments = Instrument.query({id: "promotions"}, function() {
			vm.instruments = getInstruments;
			vm.marques = vm.getCurrentMarques();
		});
		
		vm.sortByBrand = function() {
			
		}
	});
})();