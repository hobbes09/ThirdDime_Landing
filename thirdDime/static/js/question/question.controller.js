angular.module('Que', ['ngMaterial'])
.controller("QueController", ['$scope', '$mdDialog', function ($scope, $mdDialog) {
	$scope.answer = function (reply) {
		if (reply == "cypress"){
			$mdDialog.hide();
		}
		$mdDialog.hide();
	};


	$scope.answer1 = function (val) {
		var result1 = false;
		if (val == "cypress"){
			result1 = true;
		}
		$mdDialog.hide(result1);
	};

	$scope.answer2 = function (val) {
		var result = false;
		if (val == "Drapes"){
			result = true;
		}
		$mdDialog.hide(result);
	};

	$scope.answer4 = function (val) {
		var result = false;
		if (val == "1787"){
			result = true;
		}
		$mdDialog.hide(result);
	};

	$scope.answer5 = function (val) {
		var result = false;
		if (val == "skull"){
			result = true;
		}
		$mdDialog.hide(result);
	};

	var que6 = {"option1": false,
	"option2": false,
	"option3": false,
	"option4": false};

	$scope.movement = {};
	$scope.answer6 = function (val) {

		que6["option" + val] = true;
	};

	$scope.$watch(function () {
		return que6.option1 && que6.option2 && que6.option3 && que6.option4;
	}, function (val) {
		if (val) {
			var mov = $scope.movement;
			var result = (mov.paint1=="Futurism" && mov.paint1=="Fauvism" && mov.paint1=="Impressionism" && mov.paint1=="Cubism")
			$mdDialog.hide(result);
		}
	});

	$scope.answer7 = function (val) {
		$mdDialog.hide(val);
	};

	$scope.answer8 = function () {
		$mdDialog.hide();
	};

	$scope.answer9 = function (val) {
		var result = val == "Three" ? true : false;
		$mdDialog.hide(result);
	};
}]);