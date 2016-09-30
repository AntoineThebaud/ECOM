(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('instrumentController', function($routeParams, Instrument, Panier, $route) {
		
		var vm = this;
		vm.id = $routeParams.ID;
		
		//récupère le panier
		vm.panier = Panier.monPanier;
		
		var product = Instrument.get({"id": $routeParams.ID}, function() {
			vm.instrument = product;
			vm.prixfinal = vm.instrument.prix * ((100-vm.instrument.promo)/100);
		});
		
		vm.dateAjout = new Date(); //useless ?
		vm.dateAjout = Date.now();
		vm.avis = {
			note: '',
			titre: '',
			date: '',
			texte:'',
		};
		
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
		
		vm.ajoutPost = function(){
			vm.avis.date = vm.dateAjout;
			vm.avis.texte.replace(/\r?\n/g, '<br />');
			product.avis.push(vm.avis);
			console.log('Post ajouté');
			product.$update({id:vm.id},function() {
				console.log('maj réussi');
				$route.reload();
			});
		}		
	});
})();