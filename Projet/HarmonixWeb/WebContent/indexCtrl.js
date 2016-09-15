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

// valeur exemple :
//vm.instruments = [
//{
//	id:	1,
//	name: "Fender Squier Stratocaster",
//	image: "FenderSquier.png",
//	carac1: "manche en titane",
//	carac2: "corps en papier crépon",
//	carac3: "micros double bobinage"
//},
//{
//	id:	2,
//	name: "Ibanez HX820",
//	image: "FenderSquier.png",
//    carac1: "manche en barbaque",
//    carac2: "corps en deulamek",
//    carac3: "micros ondes"
//},
//{
//	id:	3,
//	name: "LAG B400",
//	image: "FenderSquier.png",
//    carac1: "manche en barbaque",
//    carac2: "corps en deulamek",
//    carac3: "micros ondes"
//}
