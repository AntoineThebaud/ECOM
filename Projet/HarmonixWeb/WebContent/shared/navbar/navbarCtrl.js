(function () {
	"use strict";
	
	var module = angular.module("app"); //retrieve the module named "app"
	
	module.controller('navbarController', function(Panier) {
		var vm = this;
		
		vm.displayChilds = function(index) {
	        vm.items[index].active = !vm.items[index].active;
	    };
	    
	    vm.items = [
            {
                name: "Guitares",
                subItems: [
                    {name: "Guitares acoustiques"},
                    {name: "Guitares électriques"},
                    {name: "Guitares électro-acoustiques"}
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