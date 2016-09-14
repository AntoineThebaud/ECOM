(function () {
	"use strict";
	angular.module('app').controller('instrumentController', instrumentCtrl);
	
	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('instrumentController', function(Instrument) {
		this.idInstrument = $routeParams.idInstrument;
		
		// Récupère l'instrument en question
		var getInstru = Instrument.get(158, function(data) {
			//TODO
			$scope.instruments = getinstru;
		});
	});
})();
