(function() {
  'use strict';
  
  var module = angular.module('app', ['ngResource', 'ngRoute']); //create a module named "app"
  
  module.config(function ($routeProvider){
	  $routeProvider
	  	.when('/', {
	  		templateUrl: './components/home/home.htm',
	  		controller: 'instrumentsListController'
	  	})
	  	.when('/ficheInstru/:ID', {
	  		templateUrl: './components/ficheInstru/ficheInstru.htm',
	  		controller: 'instrumentController'
	  	})	  	
	  	.when('/categorie/:TYPE', {
	  		templateUrl: './components/categorie/categorie.htm',
	  		controller: 'categorieController'
	  	})
	  	.when('/macrocategorie/:TYPE', {
	  		templateUrl: './components/macrocategorie/macrocategorie.htm',
	  		controller: 'macrocategorieController'
	  	})
	  	.when('/panier', {
	  		templateUrl: './components/panier/panier.htm',
	  		controller: 'panierController'
	  	})
	  	.when('/promotions', {
	  		templateUrl: './components/promotions/promotions.htm',
	  		controller: 'promotionsController'
	  	})
//	  	.when('/inscription', {
//			templateUrl : './formulaire.html',
//			controller : 'UtilisateurController'
//		})
	  	.otherwise({
	  		redirectTo: '/'
	  	});
	  
	 // $locationProvider.html5Mode(true);
  })
  
//  angular.module('app', ['ui.router', 'ngResource']);
})();