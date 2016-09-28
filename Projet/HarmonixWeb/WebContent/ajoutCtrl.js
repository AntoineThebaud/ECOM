(function () {
	"use strict";

	var module = angular.module("app").controller('ajoutController', function($scope, Instrument) {
		//Instru 1
		$scope.instru1 = new Instrument();
		$scope.instru1.nom = 'Gibson LP Classic FB 2015';
		$scope.instru1.categorie = 'modeles-single-cut';
		$scope.instru1.images = 'gibson_lp_classic_fb_2015.jpg';
		$scope.instru1.fabricant = 'Gibson';
		$scope.instru1.prix = 990;
		$scope.instru1.promo = 0;
		$scope.instru1.stock = 12;
		$scope.instru1.caracteristiques = [
 		    {nom:"Bois", valeur:"Acajou"},
 		    {nom:"Largeur du sillet", valeur:"46 mm"},
 		    {nom:"Profil du manche", valeur:"Slim Taper"}
 		];
	    $scope.instru1.$save(function() {
	    	console.log('ajout n°1 réussi');
	    });
	    
	    //Instru 2	    
	    $scope.instru2 = new Instrument();
	    $scope.instru2.nom = 'Fender Precision Bass Special OWT';
		$scope.instru2.categorie = 'basses-heavy-4-cordes';
		$scope.instru2.images = 'fender_precision_bass_special_owt.jpg';
		$scope.instru2.fabricant = 'Fender';
		$scope.instru2.prix = 1077;
		$scope.instru2.promo = 25;
		$scope.instru2.stock = 120;
		$scope.instru2.caracteristiques = [
 		    {nom:"Nombre de cordes", valeur:"4"},
 		    {nom:"Corps", valeur:"Aulne"},
 		    {nom:"Finition", valeur:"Olympic white"}
 		];
	    $scope.instru2.$save(function() {
	    	console.log('ajout n°2 réussi');
	    });
	    
	    //Instru 3
	    $scope.instru3 = new Instrument();
	    $scope.instru3.nom = 'Squier Bullet Strat HSS Black';
		$scope.instru3.categorie = 'modeles-st';
		$scope.instru3.images = 'squier-bullet-strat-hss-black.png';
		$scope.instru3.fabricant = 'Squier';
		$scope.instru3.prix = 125;
		$scope.instru3.promo = 0;
		$scope.instru3.stock = 6;
		$scope.instru3.caracteristiques = [
			{nom:"Série", valeur:"Bullet"},
			{nom:"Corps", valeur:"Tilleul"},
			{nom:"Touche", valeur:"Pallissandre"},
			{nom:"Manche", valeur:"Vissé en érable, profil 'C'"},			
			{nom:"Frettes", valeur:"21 Medium Jumbo"},
			{nom:"Diapason", valeur:"25.5\" (648 mm)"},
			{nom:"Radius", valeur:"9.5 (241 mm)"},
			{nom:"Largeur du sillet", valeur:"1.650\" (42 mm)"},
			{nom:"Micros", valeur:"2x simple bobinage Squier Standard Single-Coil Strat + Standard Humbucking"},
			{nom:"Contrôles", valeur:"Master Volume, Tone 1. (manche), Tone 2. (milieu), sélecteur micros 5 positions"},
			{nom:"Chevalet", valeur:"vibrato flottant Squier 2-Point Synchronized Tremolo with Block Saddles"},
			{nom:"Mécaniques", valeur:"Squier Standard bain d'huile"}
 		];
	    $scope.instru3.$save(function() {
	    	console.log('ajout n°3 réussi');
	    });
	    
	    //Instru 4
	    $scope.instru4 = new Instrument();
	    $scope.instru4.nom = 'Fender Telecaster';
		$scope.instru4.categorie = 'modeles-st';
		$scope.instru4.images = 'electric-guitar-tele.jpg';
		$scope.instru4.fabricant = 'Fender';
		$scope.instru4.prix = 850;
		$scope.instru4.promo = 10;
		$scope.instru4.stock = 9;
		$scope.instru4.caracteristiques = [
			{nom:"Corps", valeur:"Frêne"},
			{nom:"Manche", valeur:"Erable"},
			{nom:"Diapason", valeur:"25.5\" (648 mm)"}
 		];
	    $scope.instru4.$save(function() {
	    	console.log('ajout n°4 réussi');
	    });
		
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