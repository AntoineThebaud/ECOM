(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"

	module.controller('instrumentsListController', function(Instrument) {
		
		var vm = this;
		vm.promotions = [];
		vm.nouveautes = [];
		vm.bestSellers = [];
		
		var getPromotions = Instrument.query({id: "promotions", max: "3"}, function() {
			vm.promotions = getPromotions;
		});
		
		var getNouveautes = Instrument.query({id: "nouveautes", max: "3"}, function() {
			vm.nouveautes = getNouveautes;
		});
		
		var getBestSellers = Instrument.query({id: "meilleures-ventes", max: "3"}, function() {
			vm.bestSellers = getBestSellers;
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
		
		vm.hasHalfStar = function(note){
			var d = note - Math.trunc(note);
			if(d >= 0.5)
				return 1;
			else if(d > 0 && d < 0.5)
				return 2;
			return 0;
		};
	});
})();