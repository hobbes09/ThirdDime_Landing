angular.module("Funda", ['ngMaterial', "Data"])
.controller("FundaController", ['$scope', '$mdDialog', 'result', "color", function ($scope, $mdDialog, result, color) {
	$scope.result = result;
	$scope.close = function () {
		$mdDialog.hide()
	};
	$scope.color = color

	$scope.fundaRoot = function (val) {
		$mdDialog.hide(val);
	};

}])
.controller("DaliController", ['$scope', "data", "$timeout", function ($scope, data, $timeout) {
	data.getVotes(1).then(function (data) {
		var sum = 100/(data['one'] + data['two'] + data['three'] +data['four']);
		$scope.vote31 = Math.round(data['one']*sum);
		$scope.vote32 = Math.round(data['two']*sum);
		$scope.vote33 = Math.round(data['three']*sum);
		$scope.vote34 = Math.round(data['four']*sum);
	});
}])
.controller("ArmidaController", ['$scope', "data", function ($scope, data) {
	data.getVotes(2).then(function (data) {
		var sum = 100/(data['one'] + data['two'] + data['three'] +data['four']);
		$scope.vote71 = Math.round(data['one']*sum);
		$scope.vote72 = Math.round(data['two']*sum);
		$scope.vote73 = Math.round(data['three']*sum);
		$scope.vote74 = Math.round(data['four']*sum);
	})
}]);