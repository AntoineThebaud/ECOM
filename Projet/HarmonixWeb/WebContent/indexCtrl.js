(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"

	module.controller('instrumentsListController', function(Instrument) {
		var vm = this;
		vm.instruments = [];

		var getInstruments = Instrument.query(function() {
			vm.instruments = getInstruments;
			console.log(vm.instruments);
		});
	});
})();