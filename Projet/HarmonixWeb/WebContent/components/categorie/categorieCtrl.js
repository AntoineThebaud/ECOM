(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('categorieController', function(Instrument, $scope, $routeParams) {
		var vm = this;
		vm.instruments = [];
		vm.displayedInstruments = [];
		
		//******************* code duppliqué (catégorie, promotions, nouveautés) *********************/
		
		//Filtre par marque : génerère le contenu du select 
		vm.getCurrentMarques = function() {
			var tab = [];
			var brand;
			for(var i = 0; i < vm.instruments.length; ++i) {
				brand = vm.instruments[i].fabricant;
				if(tab.indexOf(brand) == -1) {
					tab.push(brand);
				}				
			}
			return tab;
		};
		
		//Filtre par marque : afficher seulement les instruments qui correspondent au filtre
		vm.displayBrand = function(selected_brand) {
			//réinitialisation du tableau avant traitement
			vm.displayedInstruments = vm.instruments.slice();
			if(selected_brand != "Toutes les marques") {
				for(var i = 0; i < vm.displayedInstruments.length; i++) {
					if(vm.displayedInstruments[i].fabricant != selected_brand) {
						vm.displayedInstruments.splice(i,1);
						--i;
					}
				}
			}
			//recharger l'autre tri sélectionné si il y en a
			if ($scope.selected_sort_price != "Filtrer par prix") {
				vm.displayByPrice($scope.selected_sort_price);
			} else if ($scope.selected_sort_note != "Filtrer par note") {
				vm.displayByNote($scope.selected_sort_note);
			}
		}
		
		//Filtre par prix : croissant ou décroissant
		vm.displayByPrice = function (selected_sort_price) {
			if(selected_sort_price == "Du moins cher au plus cher.") {
				vm.displayedInstruments.sort(function(a, b) {
				    return parseFloat(a.prix * ((100-a.promo)/100)) - parseFloat(b.prix* ((100-b.promo)/100));
				});	
			} else if(selected_sort_price == "Du plus cher au moins cher."){
				vm.displayedInstruments.sort(function(a, b) {
				    return parseFloat(b.prix * ((100-b.promo)/100)) - parseFloat(a.prix* ((100-a.promo)/100));
				});
			}
			//réinit filtre note
			$scope.selected_sort_note = "Filtrer par note";
		}
		
		//Filtrer par note : croissant ou décroissant
		vm.displayByNote = function (selected_sort_note) {
			if(selected_sort_note == "Du moins bien noté au mieux noté.") {
				vm.displayedInstruments.sort(function(a, b) {
				    return parseFloat(a.note) - parseFloat(b.note);
				});	
			} else if(selected_sort_note == "Du mieux noté au moins bien noté."){
				vm.displayedInstruments.sort(function(a, b) {
					return parseFloat(b.note) - parseFloat(a.note);
				});
			}
			//réinit filtre prix
			$scope.selected_sort_price = "Filtrer par prix";
		}
		
		//********************************************************************************************/

		var getInstruments = Instrument.query({categorie: $routeParams.TYPE}, function() {
			vm.instruments = getInstruments;
			vm.displayedInstruments = vm.instruments.slice();
			//init filtres
			vm.marques = vm.getCurrentMarques();
			$scope.selected_brand = "Filtrer par marque";
			$scope.selected_sort_price = "Filtrer par prix";
			$scope.selected_sort_note = "Filtrer par note";
		});
		
		vm.categoriesFormat = {
			"modeles-st" : "Modèles ST",
			"modeles-t" : "Modèles T",
			"modeles-single-cut" : "Modèles Single Cut",
			"modeles-double-cut" : "Modèles Double Cut",
			"guitares-metal" : "Guitares Metal", 
			"guitares-7-cordes" : "Guitares 7 Cordes",
			"guitares-8-cordes" : "Guitares 8 Cordes", 
			"guitares-classiques-1-4" : "Guitares classiques 1/4",
			"guitares-classiques-1-2" : "Guitares classiques 1/2",
			"guitares-classiques-3-4" : "Guitares classiques 3/4",
			"guitares-classiques-7-8" : "Guitares classiques 7/8",
			"guitares-classiques-4-4" : "Guitares classiques 4/4",
			"guitares-classiques-electro-acoustiques" : "Guitares classiques électro-acoustiques",
			"guitares-dreadnought" : "Guitares Dreadnought",
			"guitares-dreadnought-electro-acoustiques" : "Guitares Dreadnought électro-acoustiques",
			"guitares-jumbo" : "Guitares Jumbo",
			"guitares-jumbo-electro-acoustiques" : "Guitares Jumbo électro-acoustiques",
			"guitares-000" : "Guitares 000",
			"guitares-000-electro-acoustiques" : "Guitares 000 électro-acoustiques",
			"basses-acoustiques-4-cordes" : "Basses acoustiques 4 cordes",
			"basses-acoustiques-5-cordes" : "Basses acoustiques 5 cordes",
			"basses-acoustiques-fretless" : "Basses acoustiques Fretless",
			"basses-jazz-4-cordes" : "Basses Jazz 4 cordes",
            "basses-jazz-5-cordes" : "Basses Jazz 5 cordes",
            "basses-precision-4-cordes" : "Basses Precision 4 cordes",
            "basses-precision-5-cordes" : "Basses Precision 5 cordes",
            "basses-heavy-4-cordes" : "Basses Heavy 4 cordes",
            "basses-heavy-5-cordes" : "Basses Heavy 5 cordes"
		}
		vm.categorie = vm.categoriesFormat[$routeParams.TYPE];
		
		//fonction pour affichage etoiles //TODO : code duppliqué (promos, catégorie, ficheProduit)
		vm.range=function(min,max,step){
			step = step || 1;
			var input = [];
		    for (var i = min; i <= max; i += step) {
		        input.push(i);
		    }
		    return input;
		};
	});
})();