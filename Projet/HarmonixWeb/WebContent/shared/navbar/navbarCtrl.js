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
                subItems: [
					{name: "Guitares électriques",
						subSubItems: [
							{name: "Modèles ST"},
							{name: "Modèles T"},
							{name: "Modèles Single Cut"},
							{name: "Modèles Double Cut"},
							{name: "Guitares Metal"},
							{name: "Guitares 7 Cordes"},
							{name: "Guitares 8 Cordes"}
						]
					},
					{name: "Guitares classiques",
						subSubItems: [
					      {name: "Guitares classiques 1/4"},
					      {name: "Guitares classiques 1/2"},
					      {name: "Guitares classiques 3/4"},
					      {name: "Guitares classiques 7/8"},
					      {name: "Guitares classiques 4/4"},
					      {name: "Guitares classiques électro-acoustiques"}
					    ]
					},
                    {name: "Guitares Folk",
                    	subSubItems: [
                          {name: "Guitares Dreadnought"},
                          {name: "Guitares Dreadnought électro-acoustiques"},
                          {name: "Guitares Jumbo"},
                          {name: "Guitares Jumbo électro-acoustiques"},
                          {name: "Guitares 000"},
                          {name: "Guitares 000 électro-acoustiques"}
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