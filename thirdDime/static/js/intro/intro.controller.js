angular.module('Intro', ['ngMaterial'])
.controller("IntroController", ['$scope', '$mdDialog', 'intro', function ($scope, $mdDialog, intro) {
	$scope.intro = intro;

	$scope.questionDialog = function () {
		$mdDialog.hide();
	};
}]);