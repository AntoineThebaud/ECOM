(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('instrumentsListController', function(Instrument) {
		this.instruments = [];
		
		var allInstruments = Instrument.query(function() {
			$scope.instruments = allInstruments;
		});
	});
})();