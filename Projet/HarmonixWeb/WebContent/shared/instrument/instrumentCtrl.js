(function () {
	"use strict";
	angular.module('app').controller('instrumentController', instrumentCtrl);
	
	  //TODO
	
	function instrumentCtrl($scope, Instrument) {
		// ng-route à inclure dans le module mais dans lequel :O ?
		$scope.idInstrument = $routeParams.idInstrument;
		
		// Récupère l'instrument en question
		var getInstru = Instrument.query(function() {
			 $scope.instruments = getinstru;
		});
	}

})();
