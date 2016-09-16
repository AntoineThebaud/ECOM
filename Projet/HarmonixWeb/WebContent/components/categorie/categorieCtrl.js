(function () {
	"use strict";
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('categorieController', function(Instrument, $routeParams) {
		var vm = this;
		vm.categorie = $routeParams.TYPE;
		vm.instruments = [];

		var getInstruments = Instrument.query(function() {
			vm.instruments = getInstruments;
			console.log(vm.instruments);
		});
	});
})();


//future requete :
//var getInstruments = Instrument.get({"type": $routeParams.TYPE}, function() {
//	vm.instruments = getInstruments;
//	console.log(vm.instruments);
//});