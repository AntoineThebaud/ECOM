(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"

	module.controller('instrumentsListController', function(Instrument) {
		
		var vm = this;
		vm.promotions = [];
		vm.nouveautes = [];
		
		var getPromotions = Instrument.query({id: "promotions", max: "3"}, function() {
			vm.promotions = getPromotions;
		});
		
		var getNouveautes = Instrument.query({id: "nouveautes", max: "3"}, function() {
			vm.nouveautes = getNouveautes;
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