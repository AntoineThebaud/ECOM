(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('promotionsController', function(Instrument, $scope, $routeParams) {
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

		var getPromotions = Instrument.query({id: "promotions"}, function() {
			vm.instruments = getPromotions;
			vm.displayedInstruments = vm.instruments.slice();
			//init filtres
			vm.marques = vm.getCurrentMarques();
			$scope.selected_brand = "Filtrer par marque";
			$scope.selected_sort_price = "Filtrer par prix";
			$scope.selected_sort_note = "Filtrer par note";
		});
		
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