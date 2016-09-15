(function () {
	"use strict";
	
	var module = angular.module("app"); //retrieve the module named "app"
	
	module.controller('panierController', function() {
		var vm = this;
		vm.articles = {
			"Fender Beurre": {
				image: "FenderSquier.png",
        		quantity: 1,
        		prix_u: "119.00"
			},
			"Ibanez Merguez": {
				image: "FenderSquier.png",
        		quantity: 3,
        		prix_u: "75.00"
			},
			"LAG Spike": {
				image: "FenderSquier.png",
        		quantity: 1,
        		prix_u: "355.00"
			}	
		}
	});
})();