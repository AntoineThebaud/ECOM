(function () {
	"use strict";

	var module = angular.module("app").controller('ajoutController', function($scope, Instrument) {
		/*$scope.instru1 = new Instrument();
		
		$scope.instru1.nom = 'Gibson LP Classic FB 2015';
		$scope.instru1.categorie = 'guitare-electrique';
		$scope.instru1.images = 'gibson_lp_classic_fb_2015.jpg';
		$scope.instru1.fabricant = 'Gibson';
		$scope.instru1.prix = 990;
		$scope.instru1.promo = 0;
		$scope.instru1.caracteristiques = [
 		    {nom:"Bois", valeur:"Acajou"},
 		    {nom:"Largeur du sillet", valeur:"46 mm"},
 		    {nom:"Profil du manche", valeur:"Slim Taper"}
 		];
		
	    $scope.instru1.$save(function() {
	    	console.log('ajout Gibson réussi');
	    });
	    
	    $scope.instru2 = new Instrument();
		
	    $scope.instru2.nom = 'Fender Precision Bass Special OWT';
		$scope.instru2.categorie = 'basse-electrique';
		$scope.instru2.images = 'fender_precision_bass_special_owt.jpg';
		$scope.instru2.fabricant = 'Fender';
		$scope.instru2.prix = 1077;
		$scope.instru2.promo = 40;
		$scope.instru2.caracteristiques = [
 		    {nom:"Nombre de cordes", valeur:"4"},
 		    {nom:"Finition", valeur:"Olympic white"}
 		];
		
	    $scope.instru2.$save(function() {
	    	console.log('ajout Fender réussi');
	    });*/
		
		var i = Instrument.get({ id: 2 });
		i.$promise.then(function(result) {
			i = result;
		});
		
		i.categorie = "guitares-electriques";
		console.log(i.nom);
		console.log(JSON.stringify(i));
		
		i.$update({id:2},function() {
			console.log('maj réussi');
		});
	});
})();