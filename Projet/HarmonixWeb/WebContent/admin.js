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
			caracteristiques: [],
			images : '',
			fabricant : '',
			prix: '',
			promo: ''
 		};
		vm.caracteristiques = [];
		vm.instruments = [];
		var data = Instrument.query(function(){
			vm.instruments = data;
		});
		var id_instru;
		vm.instrumentModif;
		vm.modifOK = 0;
		vm.initModif = function(){
			vm.modifOK = 1;
			id_instru = document.getElementById('instruments').value;
			vm.instrumentModif = Instrument.get({id:parseInt(id_instru)}, function(){
				document.getElementById('nomModif').value = vm.instrumentModif.nom;
				document.getElementById('categorieModif').value = vm.instrumentModif.categorie;
				//document.getElementById('imagesModif').value = vm.instrumentModif.images;
				vm.caracteristiquesModif = vm.instrumentModif.caracteristiques;
				document.getElementById('fabricantModif').value = vm.instrumentModif.fabricant;
				document.getElementById('prixModif').value = vm.instrumentModif.prix;
				document.getElementById('promoModif').value = vm.instrumentModif.promo;
				document.getElementById('stockModif').value = vm.instrumentModif.stock;
				
			});
		}
		
		vm.ajoutCarac = function(){
			var caracNom = document.getElementById('caracNom').value;
			var caracValeur = document.getElementById('caracValeur').value;
			vm.caracteristiques.push({'nom':caracNom, 'valeur':caracValeur});
			document.getElementById('caracNom').value = "";
			document.getElementById('caracValeur').value = "";
		};
		
 		vm.ajoutImages = function(){
 			 vm.instrument.images=document.getElementById('images').value;
 		};
 		
		vm.ajoutInstru = function(){
			vm.instrument.categorie = vm.categoriesFormat[vm.categorie];
			vm.instrument.caracteristiques = vm.caracteristiques;
		    Instrument.save(vm.instrument, function() {
		    	console.log('ajout réussi');
				location.reload();
		    });
				
		};
		
		
		vm.ajoutCaracModif = function(){
			var caracNom = document.getElementById('caracNomModif').value;
			var caracValeur = document.getElementById('caracValeurModif').value;
			vm.caracteristiquesModif.push({'nom':caracNom, 'valeur':caracValeur});
			document.getElementById('caracNomModif').value = "";
			document.getElementById('caracValeurModif').value = "";
		};
		
		vm.modifInstru = function(){
			vm.instrumentModif.categorie = vm.categoriesFormat[vm.categorie];
			vm.instrumentModif.caracteristiquesModif = vm.caracteristiquesModif;
			Instrument.save(vm.instrumentModif, function(){
				console.log('modif réussie');
				location.reload();
			});
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