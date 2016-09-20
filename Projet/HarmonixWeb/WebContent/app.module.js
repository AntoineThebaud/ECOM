(function() {
  'use strict';
  
  var module = angular.module('app', ['ngResource', 'ngRoute']);
  
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
	  	.when('/panier', {
	  		templateUrl: './components/panier/panier.htm',
	  		controller: 'panierController'
	  	})
	  	.otherwise({
	  		redirectTo: '/'
	  	});
	  
	 // $locationProvider.html5Mode(true);
  })
  
//  angular.module('app', ['ui.router', 'ngResource']);
})();