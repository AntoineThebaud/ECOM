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
						type: "macrocategorie",
						subSubItems: [
							{name: "Modèles ST", url: "modeles-st"},
							{name: "Modèles T", url: "modeles-t"},
							{name: "Modèles Single Cut", url: "modeles-single-cut"},
							{name: "Modèles Double Cut", url: "modeles-double-cut"},
							{name: "Guitares Metal", url: "guitares-metal"},
							{name: "Guitares 7 Cordes", url: "guitares-7-cordes"},
							{name: "Guitares 8 Cordes", url: "guitares-8-cordes"}
						]
					},
					{	
						name: "Guitares classiques",
						url: "guitares-classiques",
						type: "macrocategorie",
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
						type: "macrocategorie",
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
                url: "basses",
                subItems: [
                    {
                    	name: "Basses acoustiques", 
                    	url: "basses-acoustiques",
                    	type: "macrocategorie",
                    	subSubItems: [
                          {name: "Basses acoustiques 4 cordes", url: "basses-acoustiques-4-cordes"},
                          {name: "Basses acoustiques 5 cordes", url: "basses-acoustiques-5-cordes"},
                          {name: "Basses acoustiques Fretless", url: "basses-acoustiques-fretless"}
                        ]
                    },
                    {
                    	name: "Basses électriques", 
                    	url: "basses-electriques",
                    	type: "macrocategorie",
                    	subSubItems: [
                          {name: "Basses Jazz 4 cordes", url: "basses-jazz-4-cordes"},
                          {name: "Basses Jazz 5 cordes", url: "basses-jazz-5-cordes"},
                          {name: "Basses Precision 4 cordes", url: "basses-precision-4-cordes"},
                          {name: "Basses Precision 5 cordes", url: "basses-precision-5-cordes"},
                          {name: "Basses Heavy 4 cordes", url: "basses-heavy-4-cordes"},
                          {name: "Basses Heavy 5 cordes", url: "basses-heavy-5-cordes"},
                        ]
                    }
                ]
            },
            {
                name: "Batteries",
                url: "batteries",
                subItems: [
					{
						name: "Batteries acoustiques",
						url: "batteries_acoustiques",
						type: "categorie"
					},
					{
						name: "Batteries électroniques",
						url: "batteries_electroniques",
						type: "categorie"
					}
                ]
            },
            {
                name: "Claviers",
                url: "claviers",              
            },
            {
                name: "DJ",
                url: "DJ",              
            },
            {
                name: "Vents",
                url: "vents",              
            },
            {
                name: "Violons",
                url: "violons",              
            },
            {
                name: "Inst. Trad",
                url: "trad",              
            },
            {
                name: "Autres",
                url: "autres",              
            }
        ];
	});
})();