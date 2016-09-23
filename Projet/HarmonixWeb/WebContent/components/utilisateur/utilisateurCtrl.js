(function() {
	"use strict";

	var module = angular.module("app");
	module.controller('UtilisateurController', function(Utilisateur) {
		var vm = this;
		var utilisateur = new Utilisateur();

		vm.utilisateur = {
			nom : '',
			prenom : '',
			age : '',
			mail : '',
			motDePasse : '',
		};
		vm.ajoutClient = function() {
			Utilisateur.save(vm.utilisateur, function() {
				console.log('ajout réussi')
				// data saved. $scope.entry is sent as the post body.
			});

		}
		vm.verifMail = function() {
			var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
			if (!regex.test(vm.utilisateur.mail)) {
				return false;
			} else {
				return true;
			}
		}

	});
})();