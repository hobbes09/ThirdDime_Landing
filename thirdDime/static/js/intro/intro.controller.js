angular.module('Intro', ['ngMaterial'])
.controller("IntroController", ['$scope', '$mdDialog', 'intro', 'color', function ($scope, $mdDialog, intro, color) {
	$scope.intro = intro;
	$scope.color = color;

	$scope.questionDialog = function () {
		$mdDialog.hide();
	};
}]);