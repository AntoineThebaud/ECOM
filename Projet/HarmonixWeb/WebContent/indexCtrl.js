(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"

	module.controller('instrumentsListController', function(/*Instrument*/) {
		var vm = this;
		vm.instruments = [];
		// valeur exemple :
		vm.instruments = [
		{
			name: "Fender Squier Stratocaster",
			image: "FenderSquier.png",
			carac1: "manche en titane",
			carac2: "corps en papier crépon",
			carac3: "micros double bobinage"
		},
		{
			name: "Ibanez HX820",
			image: "FenderSquier.png",
		    carac1: "manche en barbaque",
		    carac2: "corps en deulamek",
		    carac3: "micros ondes"
		},
		{
			name: "LAG B400",
			image: "FenderSquier.png",
		    carac1: "manche en barbaque",
		    carac2: "corps en deulamek",
		    carac3: "micros ondes"
		}
		];

//		var getInstruments = Instrument.query(function() {
//			vm.instruments = getInstruments;
//		});
	});
})();

// valeur exemple :
//
//vm.instruments = [
//{
//	name: "Fender Trolol SuperBatard",
//	carac1: "manche en titane",
//	carac2: "corps en papier crépon",
//	carac3: "micros double bobinage"
//},
//{
//	name: "Ibanez Merguez",
//    carac1: "manche en barbaque",
//    carac2: "corps en deulamek",
//    carac3: "micros ondes"
//}
//];
