(function () {
	"use strict";
	
	var module = angular.module("app"); //retrieve the module named "app"
	
	module.controller('macrocategorieController', function() {
		var vm = this;
		
	    vm.categories = [
            {
                name: "Guitares",
                urlImage: "category_gi.jpg",
                url: "guitares",
                subCategories: [
					{
						name: "Guitares électriques",
						url: "guitare-electrique",
						urlImage: "124838.jpg"
					},
					{	
						name: "Guitares classiques",
						url: "guitare-classique",
						urlImage: "130181.jpg"
					},
                    {
						name: "Guitares Folk",
						url: "guitare-folk",
						urlImage: "142800.jpg"
                    }
                ]
            },
            {
                name: "Guitares électriques",
                urlImage: "category_gi.jpg",
                url: "guitares-electriques",
                subCategories: [
					{
						name: "Modèles ST",
						urlImage: "323743.jpg"
					},
					{	
						name: "Modèles T",
						urlImage: "196765.jpg"
					},
                    {
						name: "Modèles Single Cut",
						urlImage: "143010.jpg"
                    },
                    {
						name: "Modèles Double Cut",
						urlImage: "151034.jpg"
                    },
                    {
						name: "Guitares Metal",
						urlImage: "158901.jpg"
                    },
                    {
						name: "Guitares 7 cordes",
						urlImage: "203250.jpg"
                    },{
						name: "Guitares 8 cordes",
						urlImage: "266177.jpg"
                    }
                ]
            },
            {
                name: "Guitares classiques",
                urlImage: "category_gi.jpg",
                url: "guitares-classiques",
                subCategories: [
					{
						name: "Guitares classiques 1/4",
						urlImage: "219039.jpg"
					},
					{	
						name: "Guitares classiques 1/2",
						urlImage: "130178.jpg"
					},
                    {
						name: "Guitares classiques 3/4",
						urlImage: "241212.jpg"
                    },
                    {
						name: "Guitares classiques 7/8",
						urlImage: "259711.jpg"
                    },
                    {
						name: "Guitares classiques 4/4",
						urlImage: "130181.jpg"
                    },
                    {
						name: "Guitares classiques électro-acoustiques",
						urlImage: "268344.jpg"
                    }
                ]
            },
            {
                name: "Guitares Folk",
                urlImage: "category_gi.jpg",
                url: "guitares-folk",
                subCategories: [
					{
						name: "Guitares Dreadnought",
						urlImage: "268342.jpg"
					},
					{	
						name: "Guitares Dreadnought électro-acoustiques",
						urlImage: "268342.jpg"
					},
                    {
						name: "Guitares Jumbo",
						urlImage: "187498.jpg"
                    },
                    {
						name: "Guitares Jumbo électro-acoustiques",
						urlImage: "187498.jpg"
                    },
                    {
						name: "Guitares 000",
						urlImage: "334306.jpg"
                    },
                    {
						name: "Guitares 000 électro-acoustiques",
						urlImage: "334306.jpg"
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