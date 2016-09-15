// CA MARCHE PAS DONC ON LAISSE TOMBER POUR L'INSTANT ET ON REPASSE AVEC NG-ROUTE

(function() {
	
	'use strict';
	
	angular.module('app').config(routerApp); 
	routerApp.$inject = [ '$stateProvider', '$locationProvider', '$urlRouterProvider' ];	
	function routerApp($stateProvider, $locationProvider, $urlRouterProvider) {
		
		var headerState={
				templateUrl: 'shared/header/header.htm',
//				controller: 'headerCtrl',
//				controllerAs: 'header'
		};
		
		var menuState={
				templateUrl: 'shared/navbar/navbar.htm',
//				controller: 'navbarCtrl',
//				controllerAs: 'navbar'
		};
		
		$urlRouterProvider.otherwise("/")
		
	    $stateProvider
	        .state('index', {
	        	url: '/',
	        	views: {
	        		'container': {
	        			templateUrl: 'home.htm',
	        			controller: 'instrumentsListController',
	        			controllerAs: 'instrumentsList'
	        		},
	        		'header': headerState,
	        		'menu': menuState
	        	}
	        })
	        .state('instrument', {
	        	url:'/ficheInstru/ficheInstru.html',
	        	views: {
	        		'container': {
	        			templateUrl: 'components/ficheInstru/ficheInstru.html',
	        			controller: 'ficheInstruCtrl',
	        			controllerAs: 'ficheInstru'
	        		}
	        	},
	        	'header': headerState,
	        	'menu': menuState
	        })
	        .state('panier', {
	        	url: '/panier/panier.html',
	        	views: {
	        		'container': {
	        			templateUrl: '/components/panier/panier.html',
	        			controller: 'panierCtrl',
	        			controllerAs: 'panier'
	        		},
	        		'header': headerState,
	        		'menu': menuState
	        	}
	        })
	        // rajouter les autres états à la suite avec un .state comme précedemment
	        ;
	    
//	    $locationProvider.html5Mode({
//	        enabled: true,
//	        requireBase: false
//	      });
	}
})();