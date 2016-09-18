(function () {
	"use strict";

	var module = angular.module("app").controller('ajoutController', function($scope, Instrument) {
		/*$scope.instru = new Instrument();
		
		$scope.instru.nom = 'Gibson LP Classic FB 2015';
		$scope.instru.type = 'Guitare électrique';
		$scope.instru.images = 'gibson_lp_classic_fb_2015.jpg';
		$scope.instru.fabricant = 'Gibson';
		$scope.instru.poids = 2.5;
		$scope.instru.prix = 990;
		$scope.instru.caracteristiques = [
 		    {nom:"Bois", valeur:"Acajou"},
 		    {nom:"Largeur du sillet", valeur:"46 mm"},
 		    {nom:"Profil du manche", valeur:"Slim Taper"}
 		];
		
	    $scope.instru.$save(function() {
	    	console.log('ajout réussi');
	    });*/
		
		var i = Instrument.get({ id: 1 }, function() {
			console.log('récupération réussie');
		});
		
		i.categorie = 1;
		
		i.$update({id:1},function() {
			console.log('maj réussi');
		});
	});
})();