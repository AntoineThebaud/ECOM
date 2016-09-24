(function () {
	"use strict";
	
	var module = angular.module("app"); //retrieve the module named "app"
	
	module.controller('headerController', function(Panier, Utilisateur) {
		var vm = this;
		var utilisateur = new Utilisateur(); 
		var utilisateurConnecte ;
		//récupère le panier
		vm.panier = Panier.monPanier;
		
		vm.mail = ''
		vm.motDePasse = '';
		
		vm.auth = function() {
			console.log(vm.mail);
			console.log(vm.motDePasse);
			console.log('authentification en cours ! ');
			utilisateurConnecte=  Utilisateur.get({ mail: vm.mail , password: vm.motDePasse }, function() {
				console.log('authentification en cours ! ')	
			});

		}
	});
})();