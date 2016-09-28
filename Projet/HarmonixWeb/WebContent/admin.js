/**
 * 
 */
(function () {
	"use strict";

	var module = angular.module("app").controller('adminController', function($route, Instrument) {
		var vm = this;
	
		vm.categorie = "";
		vm.categories = [
		 				"Modèles ST",
		 				"Modèles T",
		 				"Modèles Single Cut",
		 				"Modèles Double Cut",
		 				"Guitares Metal", 
		 				"Guitares 7 Cordes",
		 				"Guitares 8 Cordes", 
		 				"Guitares classiques 1/4",
		 				"Guitares classiques 1/2",
		 				"Guitares classiques 3/4",
		 				"Guitares classiques 7/8",
		 				"Guitares classiques 4/4",
		 				"Guitares classiques électro-acoustiques",
		 				"Guitares Dreadnought",
		 				"Guitares Dreadnought électro-acoustiques",
		 				"Guitares Jumbo",
		 				"Guitares Jumbo électro-acoustiques",
		 				"Guitares 000",
		 				"Guitares 000 électro-acoustiques",
		 				"Basses acoustiques 4 cordes",
		 				"Basses acoustiques 5 cordes",
		 				"Basses acoustiques Fretless",
		 				"Basses Jazz 4 cordes",
		 	            "Basses Jazz 5 cordes",
		 	            "Basses Precision 4 cordes",
		 	            "Basses Precision 5 cordes",
		 	            "Basses Heavy 4 cordes",
		 	           "Basses Heavy 5 cordes"	
		 		];
		 		vm.categoriesFormat = {
		 				"Modèles ST" : "modeles-st",
		 				"Modèles T" : "modeles-st",
		 				"Modèles Single Cut": "modeles-single-cut",
		 				"Modèles Double Cut" : "modeles-double-cut" ,
		 				"Guitares Metal" :"guitares-metal", 
		 				"Guitares 7 Cordes" :"guitares-7-cordes",
		 				"Guitares 8 Cordes" : "guitares-8-cordes" , 
		 				"Guitares classiques 1/4" : "guitares-classiques-1-4" ,
		 				"Guitares classiques 1/2" : "guitares-classiques-1-2",
		 				"Guitares classiques 3/4" : "guitares-classiques-3-4",
		 				"Guitares classiques 7/8" : "guitares-classiques-7-8",
		 				"Guitares classiques 4/4" : "guitares-classiques-4-4",
		 				"Guitares classiques électro-acoustiques" : "guitares-classiques-electro-acoustiques",
		 				"Guitares Dreadnought" : "guitares-dreadnought",
		 				"Guitares Dreadnought électro-acoustiques": "guitares-dreadnought-electro-acoustiques",
		 				"Guitares Jumbo" : "guitares-jumbo",
		 				"Guitares Jumbo électro-acoustiques" : "guitares-jumbo-electro-acoustiques",
		 				"Guitares 000" : "guitares-000",
		 				"Guitares 000 électro-acoustiques" : "guitares-000-electro-acoustiques" ,
		 				"Basses acoustiques 4 cordes" : "basses-acoustiques-4-cordes" ,
		 				"Basses acoustiques 5 cordes" : "basses-acoustiques-5-cordes" ,
		 				"Basses acoustiques Fretless" : "basses-acoustiques-fretless" ,
		 				"Basses Jazz 4 cordes" : "basses-jazz-4-cordes" ,
		 	            "Basses Jazz 5 cordes" : "basses-jazz-5-cordes" ,
		 	            "Basses Precision 4 cordes" : "basses-precision-4-cordes" ,
		 	            "Basses Precision 5 cordes" : "basses-precision-5-cordes" ,
		 	            "Basses Heavy 4 cordes" : "basses-heavy-4-cordes" ,
		 	            "Basses Heavy 5 cordes" : "basses-heavy-5-cordes"
		 			};
		 		
 		vm.instrument = new Instrument();
 		vm.instrument = {
			nom : '',
			categorie : '',
			images : '',
			fabricant : '',
			prix: '',
			promo: ''
 		};
		
 		vm.ajoutImages = function(){
 			 vm.instrument.images=document.getElementById('images').value;
 		}
		vm.ajoutInstru = function(){
			vm.instrument.categorie = vm.categoriesFormat[vm.categorie];
			console.log(vm.instrument.images);
		    Instrument.save(vm.instrument, function() {
		    	console.log('ajout réussi');
		    });
				console.log('maj réussi');
				$route.reload();
		};
		
			
			
		
		
		/*var i = Instrument.get({ id: 2 });
		i.$promise.then(function(result) {
			i = result;
		});
		
		i.categorie = "guitares-electriques";
		console.log(i.nom);
		console.log(JSON.stringify(i));
		
		i.$update({id:2},function() {
			console.log('maj réussi');
		});*/
	});
})();