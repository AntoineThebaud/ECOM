(function () {
	"use strict";
	
	var module = angular.module("app"); //retrieve the module named "app"
	
	module.controller('navbarController', function(Panier) {
		var vm = this;
		
		vm.displayChilds = function(index) {
	        vm.items[index].active = !vm.items[index].active;
	    };
	    
	    vm.displayChildsOfChilds = function(index, parentIndex) {   	
	    	vm.items[parentIndex].subItems[index].active = !vm.items[parentIndex].subItems[index].active;
	    };
	    
	    vm.items = [
            {
                name: "Guitares",
                url: "guitares",
                subItems: [
					{
						name: "Guitares électriques",
						url: "guitares-electriques",
						subSubItems: [
							{name: "Modèles ST", url: "modeles-st"},
							{name: "Modèles T", url: "modeles-t"},
							{name: "Modèles Single Cut", url: "modeles-single-cut"},
							{name: "Modèles Double Cut", url: "modeles-double-cut"},
							{name: "Guitares Metal", url: "guitares-metal"},
							{name: "Guitares 7 Cordes", url: "guitares-7_cordes"},
							{name: "Guitares 8 Cordes", url: "guitares-8-cordes"}
						]
					},
					{	
						name: "Guitares classiques",
						url: "guitares-classiques",
						subSubItems: [
					      {name: "Guitares classiques 1/4", url: "guitares-classiques-1-4"},
					      {name: "Guitares classiques 1/2", url: "guitares-classiques-1-2"},
					      {name: "Guitares classiques 3/4", url: "guitares-classiques-3-4"},
					      {name: "Guitares classiques 7/8", url: "guitares-classiques-7-8"},
					      {name: "Guitares classiques 4/4", url: "guitares-classiques-4-4"},
					      {name: "Guitares classiques électro-acoustiques", url: "guitares-classiques-electro-acoustiques"}
					    ]
					},
                    {
						name: "Guitares Folk",
						url: "guitares-folk",
                    	subSubItems: [
                          {name: "Guitares Dreadnought", url: "guitares-dreadnought"},
                          {name: "Guitares Dreadnought électro-acoustiques", url: "guitares-dreadnought-electro-acoustiques"},
                          {name: "Guitares Jumbo", url: "guitares-jumbo"},
                          {name: "Guitares Jumbo électro-acoustiques", url: "guitares-jumbo-electro-acoustiques"},
                          {name: "Guitares 000", url: "guitares-000"},
                          {name: "Guitares 000 électro-acoustiques", url: "guitares-000-electro-acoustiques"}
                        ]
                    }
                ]
            },
            {
                name: "Basses",
                subItems: [
                    {name: "Basses acoustiques"},
                    {name: "Basses électriques"},
                ]
            },
            {
                name: "Batteries",
                subItems: [
					{name: "Batteries acoustiques"},
					{name: "Batteries électroniques"},
                ]
            }
        ];
	});
})();