(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('instrumentController', function($routeParams, Instrument, Panier) {
		
		//console.log($routeParams);
		var vm = this;
		vm.id = $routeParams.ID;
		
		//récupère le panier
		vm.panier = Panier.monPanier;
		
		var product = Instrument.get({"id": $routeParams.ID}, function() {
			vm.modele = product.nom;			
			vm.marque = product.fabricant;
			vm.image = product.images;
			vm.prix = product.prix;			
			vm.specs = product.caracteristiques;
			vm.avisList = product.avis;
			//ajouter la note !
		});
		vm.dateAjout=new Date();
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
		
		vm.ajoutPost = function(){
			vm.avis.date = vm.dateAjout;
			vm.avis.texte.replace(/\r?\n/g, '<br />');
			product.avis.push(vm.avis);
			console.log('Post ajouté');
			product.$update({id:vm.id},function() {
				console.log('maj réussi');
			});
		}
		
		
		
	});
})();

// Récupère l'instrument en question
//var getInstru = Instrument.get(158, function(data) {
//	//TODO
//	$scope.instruments = getinstru;
//});