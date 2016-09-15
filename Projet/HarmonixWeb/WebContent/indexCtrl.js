(function () {
	"use strict";

	var module = angular.module("app");//retrieve the module named "app"
	
	module.controller('instrumentsListController', function() {
		this.instruments = [];
	});
})();