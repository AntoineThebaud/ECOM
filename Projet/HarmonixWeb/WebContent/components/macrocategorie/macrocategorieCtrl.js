(function () {
	"use strict";
	
	var module = angular.module("app"); //retrieve the module named "app"
	
	module.controller('macrocategorieController', function($routeParams) {
		var vm = this;
		vm.tab = { "guitares" : 0, "guitares-electriques" : 1, "guitares-classiques": 2, "guitares-folk" : 3,
				"basses" : 4, "basses-acoustiques" : 5, "basses-electriques" : 6, "batteries" : 7};
		
	    vm.categories = [
            {
                name: "Guitares",
                urlImage: "category_gi.jpg",
                url: "guitares",
                type_fils: "macrocategorie",
                subCategories: [
					{
						name: "Guitares électriques",
						url: "guitares-electriques",						
						urlImage: "124838.jpg"
					},
					{	
						name: "Guitares classiques",
						url: "guitares-classiques",
						urlImage: "130181.jpg"
					},
                    {
						name: "Guitares Folk",
						url: "guitares-folk",
						urlImage: "142800.jpg"
                    }
                ]
            },
            {
                name: "Guitares électriques",
                urlImage: "category_gi.jpg",
                url: "guitares-electriques",
                type_fils: "categorie",
                subCategories: [
					{
						name: "Modèles ST",
						url: "modeles-st",
						urlImage: "323743.jpg"
					},
					{	
						name: "Modèles T",
						url: "modeles-t",
						urlImage: "196765.jpg"
					},
                    {
						name: "Modèles Single Cut",
						url: "modeles-single-cut",
						urlImage: "143010.jpg"
                    },
                    {
						name: "Modèles Double Cut",
						url: "modeles-double-cut",
						urlImage: "151034.jpg"
                    },
                    {
						name: "Guitares Metal",
						url: "guitares-metal",
						urlImage: "158901.jpg"
                    },
                    {
						name: "Guitares 7 cordes",
						url: "guitares-7-cordes",
						urlImage: "203250.jpg"
                    },
                    {
						name: "Guitares 8 cordes",
						url: "guitares-8-cordes",
						urlImage: "266177.jpg"
                    }
                ]
            },
            {
                name: "Guitares classiques",
                urlImage: "category_gi.jpg",
                url: "guitares-classiques",
                type_fils: "categorie",
                subCategories: [
					{
						name: "Guitares classiques 1/4",
						url: "guitares-classiques-1-4",
						urlImage: "219039.jpg"
					},
					{	
						name: "Guitares classiques 1/2",
						url: "guitares-classiques-1-2",
						urlImage: "130178.jpg"
					},
                    {
						name: "Guitares classiques 3/4",
						url: "guitares-classiques-3-4",
						urlImage: "241212.jpg"
                    },
                    {
						name: "Guitares classiques 7/8",
						url: "guitares-classiques-7-8",
						urlImage: "259711.jpg"
                    },
                    {
						name: "Guitares classiques 4/4",
						url: "guitares-classiques-4-4",
						urlImage: "130181.jpg"
                    },
                    {
						name: "Guitares classiques électro-acoustiques",
						url: "guitares-classiques-electro-acoustiques",
						urlImage: "268344.jpg"
                    }
                ]
            },
            {
                name: "Guitares Folk",
                urlImage: "category_gi.jpg",
                url: "guitares-folk",
                type_fils: "categorie",
                subCategories: [
					{
						name: "Guitares Dreadnought",
						url: "guitares-dreadnought",
						urlImage: "268342.jpg"
					},
					{	
						name: "Guitares Dreadnought électro-acoustiques",
						url: "guitares-dreadnought-electro-acoustiques",
						urlImage: "268342.jpg"
					},
                    {
						name: "Guitares Jumbo",
						url: "guitares-jumbo",
						urlImage: "187498.jpg"
                    },
                    {
						name: "Guitares Jumbo électro-acoustiques",
						url: "guitares-jumbo",
						urlImage: "187498.jpg"
                    },
                    {
						name: "Guitares 000",
						url: "guitares-000",
						urlImage: "334306.jpg"
                    },
                    {
						name: "Guitares 000 électro-acoustiques",
						url: "guitares-000-electro-acoustiques",
						urlImage: "334306.jpg"
                    }
                ]
            },
            
            {
                name: "Basses",
                urlImage: "category_gi.jpg",
                url: "basses",
                type_fils: "macrocategorie",
                subCategories: [
                    {
                    	name: "Basses acoustiques",
                    	url: "basses-acoustiques",
                    	urlImage: "180201.jpg"
                    },
                    {
                    	name: "Basses électriques",
                    	url: "basses-electriques",
                    	urlImage: "264956.jpg"
                    },
                ]
            },
            {
                name: "Basses acoustiques",
                urlImage: "category_gi.jpg",
                url: "basses-acoustiques",
                type_fils: "categorie",
                subCategories: [
                    {
                    	name: "Basses acoustiques 4 cordes",
                    	url: "basses-acoustiques-4-cordes",
                    	urlImage: "165298.jpg"
                    },
                    {
                    	name: "Basses acoustiques 5 cordes",
                    	url: "basses-acoustiques-5-cordes",
                    	urlImage: "180199.jpg"
                    },
                    {
                    	name: "Basses acoustiques Fretless",
                    	url: "basses-acoustiques-fretless",
                    	urlImage: "180200.jpg"
                    },
                ]
            },
            {
                name: "Basses électriques",
                urlImage: "category_gi.jpg",
                url: "basses-electriques",
                type_fils: "categorie",
                subCategories: [
                    {
                    	name: "Basses Jazz 4 cordes",
                    	url: "basses-jazz-4-cordes",
                    	urlImage: "140442.jpg"
                    },
                    {
                    	name: "Basses Jazz 5 cordes",
                    	url: "basses-jazz-5-cordes",
                    	urlImage: "268992.jpg"
                    },
                    {
                    	name: "Basses Precision 4 cordes",
                    	url: "basses-precision-4-cordes",
                    	urlImage: "324036.jpg"
                    },
                    {
                    	name: "Basses Precision 5 cordes",
                    	url: "basses-precision-5-cordes",
                    	urlImage: "182890.jpg"
                    },
                    {
                    	name: "Basses Heavy 4 cordes",
                    	url: "basses-heavy-4-cordes",
                    	urlImage: "274114.jpg"
                    },
                    {
                    	name: "Basses Heavy 5 cordes",
                    	url: "basses-heavy-5-cordes",
                    	urlImage: "315352.jpg"
                    },
                ]
            },
            
            {
                name: "Batteries",
                urlImage: "category_dr.jpg",
                url: "batteries",
                type_fils: "categorie",
                subItems: [
					{
						name: "Batteries acoustiques",
						url: "batteries_acoustiques",
						urlImage: "156270.jpg"
					},
					{
						name: "Batteries électroniques",
						url: "batteries_electroniques",
						urlImage: "244063.jpg"
					},
                ]
            }
        ];
	    
	    vm.currentCategory = vm.categories[vm.tab[$routeParams.TYPE]];
	});
})();