angular.module("Funda", ['ngMaterial', "Data"])
.controller("FundaController", ['$scope', '$mdDialog', 'result', function ($scope, $mdDialog, result) {
	$scope.result = result;
}])
.controller("DaliController", ['$scope', "data", "$timeout", function ($scope, data, $timeout) {
	data.getVotes(1).then(function (data) {
		var sum = 100/(data['one'] + data['two'] + data['three'] +data['four']);
		$scope.vote31 = data['one']*sum;
		$scope.vote32 = data['two']*sum;
		$scope.vote33 = data['three']*sum;
		$scope.vote34 = data['four']*sum;
	});
}])
.controller("ArmidaController", ['$scope', "data", function ($scope, data) {
	data.getVotes(2).then(function (data) {
		var sum = 100/(data['one'] + data['two'] + data['three'] +data['four']);
		$scope.vote31 = data['one']*sum;
		$scope.vote32 = data['two']*sum;
		$scope.vote33 = data['three']*sum;
		$scope.vote34 = data['four']*sum;
	})
}]);