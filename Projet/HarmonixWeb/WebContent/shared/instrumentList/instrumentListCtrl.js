(function () {
	"use strict";
	angular.module('app').controller('instrumentController', instrumentCtrl);
	
	function instrumentCtrl($scope, Instrument) {
		$scope.instruments = [];
		$scope.c = 0;
		
		//get all instruments
		var getinstru = Instrument.query(function() {
			 $scope.instruments = getinstru;
		});
	}

})();
