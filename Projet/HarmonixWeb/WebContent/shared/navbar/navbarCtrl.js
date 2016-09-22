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
						url: "guitares_electriques",
						subSubItems: [
							{name: "Modèles ST", url: "modeles_st"},
							{name: "Modèles T", url: "modeles_t"},
							{name: "Modèles Single Cut", url: "modeles_single_cut"},
							{name: "Modèles Double Cut", url: "modeles_double_cut"},
							{name: "Guitares Metal", url: "guitares_metal"},
							{name: "Guitares 7 Cordes", url: "guitares_7_cordes"},
							{name: "Guitares 8 Cordes", url: "guitares_8_cordes"}
						]
					},
					{	
						name: "Guitares classiques",
						url: "guitares_classiques",
						subSubItems: [
					      {name: "Guitares classiques 1/4", url: "guitares_classiques_1_4"},
					      {name: "Guitares classiques 1/2", url: "guitares_classiques_1_2"},
					      {name: "Guitares classiques 3/4", url: "guitares_classiques_3_4"},
					      {name: "Guitares classiques 7/8", url: "guitares_classiques_7_8"},
					      {name: "Guitares classiques 4/4", url: "guitares_classiques_4_4"},
					      {name: "Guitares classiques électro-acoustiques", url: "guitares_classiques_electro_acoustiques"}
					    ]
					},
                    {
						name: "Guitares Folk",
						url: "guitares_folk",
                    	subSubItems: [
                          {name: "Guitares Dreadnought", url: "guitares_dreadnought"},
                          {name: "Guitares Dreadnought électro-acoustiques", url: "guitares_dreadnought_electro_acoustiques"},
                          {name: "Guitares Jumbo", url: "guitares_jumbo"},
                          {name: "Guitares Jumbo électro-acoustiques", url: "guitares_jumbo_electro_acoustiques"},
                          {name: "Guitares 000", url: "guitares_000"},
                          {name: "Guitares 000 électro-acoustiques", url: "guitares_000_electro_acoustiques"}
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