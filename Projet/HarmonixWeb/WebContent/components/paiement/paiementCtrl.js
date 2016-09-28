(function () {
	"use strict";

	var module = angular.module("app");
	module.controller('paiementController',  function($routeParams, Panier, Commande) {
		var vm = this;
		
		//récupère le panier
		vm.panier = Panier.monPanier;
		
		vm.stockerInfosPaiement = function(){
			var c = new Commande();
			//à décommenter quand implémenté côté EJB
//			c.adresse1 = vm.adresse1;
//			c.adresse2 = vm.adresse2;
//			c.codePostal =  vm.codePostal;
//			c.ville = vm.ville;
			c.mail = vm.email;
			c.ligneCommande = [];
			for(var ligne in vm.panier.articles) {
				c.ligneCommande.push({ idInstrument: 	vm.panier.articles[ligne].id,
										quantite: 		vm.panier.articles[ligne].quantity} );
			}
			c.$save(function() {
				alert("commande réussie ! état=" + c.etat);	    		
	    	}, function() {
	    		alert("échec de la commande !");
	    	});
		}
	});
})();