angular.module('Que', ['ngMaterial', 'Data'])
.controller("QueController", ['$scope', '$mdDialog', '$timeout', 'data', "index", function ($scope, $mdDialog, $timeout, data, index) {
	"use strict";

	$scope.answer = function (reply) {
		if (reply === "cypress"){
			$mdDialog.hide();
		}
		$mdDialog.hide();
	};

	var color = ["#AC9D70", "#A3A36A", "#6D80A7", "#6D8686", "#91916C", "#B5B5C0", "#5959AC", "#C18730", "#8A5C2E"];
	$scope.color = color[index];


	$scope.answer1 = function (val) {
		var result1 = false;
		if (val === "cypress"){
			result1 = true;
		}
		$mdDialog.hide(result1);
	};

	$scope.answer2 = function (val) {
		var result = false;
		if (val === "Drapes"){
			result = true;
		}
		$mdDialog.hide(result);
	};

	$scope.answer3 = function (vote) {
		data.putVotes(1, vote);
		$mdDialog.hide(true);
	};

	$scope.answer4 = function (val) {
		var result = false;
		if (val === "1787"){
			result = true;
		}
		$mdDialog.hide(result);
	};

	$scope.answer5 = function (val) {
		var result = false;
		if (val === "three"){
			result = true;
		}
		$mdDialog.hide(result);
	};

	$scope.movement = {};

	$scope.answer61 = function (val) {
		$scope.showResult61 = true;
		$scope.result61 = false;
		if (val === "Futurism"){
			$scope.result61 = true;
		}
	};

	$scope.answer62 = function (val) {
		$scope.showResult62 = true;
		$scope.result62 = false;
		if (val === "Fauvism"){
			$scope.result62 = true;
		}
	};

	$scope.answer63 = function (val) {
		$scope.showResult63 = true;
		$scope.result63 = false;
		if (val === "Impressionism"){
			$scope.result63 = true;
		}
	};

	$scope.answer64 = function (val) {
		$scope.showResult64 = true;
		$scope.result64 = false;
		if (val === "Cubism"){
			$scope.result64 = true;
		}
	};

	$scope.$watch(function () {
		var que6 = $scope.movement;
		return que6.paint1 && que6.paint2 && que6.paint3 && que6.paint4;
	}, function (val) {
		$timeout(function () {
			if (val) {
				$mdDialog.hide();
			}
		}, 1500);
	});

	$scope.answer7 = function (vote) {
		data.putVotes(2, vote);
		$mdDialog.hide(true);
	};

	$scope.answer8 = function () {
		$mdDialog.hide();
	};

	$scope.answer9 = function (val) {
		var result = val === "Three" ? true : false;
		$mdDialog.hide(result);
	};

	$scope.answer10 = function () {
		$mdDialog.hide(true);
	};
}]);