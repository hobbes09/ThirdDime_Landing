angular.module("Funda", ['ngMaterial'])
.controller("FundaController", ['$scope', '$mdDialog', 'result', function ($scope, $mdDialog, result) {
	console.log("Funda got: ", result);
	$scope.result = result;
}]);