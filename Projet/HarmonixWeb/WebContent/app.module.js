(function() {
	
  'use strict';
  angular.module('app', ['ngResource', 'ngRoute'])
  .config(function ($routeProvider){
	  $routeProvider
	  	.when('/', {
	  		templateUrl: 'home.html',
	  		controller: 'instrumentsListController'
	  	})
	  	.when('/ficheInstru/:ID', {
	  		templateUrl: './components/ficheInstru/ficheInstru.html',
	  		controller: 'instrumentController'
	  	})
	  	.when('/categorie/:TYPE', {
	  		templateUrl: './components/categorie/categorie.htm',
	  		controller: 'categorieController'
	  	})
	  	.otherwise({
	  		redirectTo: '/'
	  	})
	  	;
	  
	 // $locationProvider.html5Mode(true);
  })
  
//  angular.module('app', ['ui.router', 'ngResource']);
})();

// à rajouter :
//	.when('/panier', {
//  		templateUrl: './components/panier/panier.htm',
//  		controller: 'panierController'
//  	})