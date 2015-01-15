angular.module('Intro', ['ngMaterial'])
.controller("IntroController", ['$scope', '$mdDialog', 'intro', 'color', 'index', function ($scope, $mdDialog, intro, color, index) {
	"use strict";

	$scope.intro = intro;
	$scope.color = color;
	$scope.index = index;

	$scope.questionDialog = function () {
		$mdDialog.hide();
	};
}]);