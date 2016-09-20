(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"

	module.controller('instrumentsListController', function(Instrument, Panier) {
		
		var vm = this;
		vm.instruments = [];

		var getInstruments = Instrument.query(function() {
			vm.instruments = getInstruments;
		});
	});
})();