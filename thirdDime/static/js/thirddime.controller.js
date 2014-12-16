angular.module("ThirdDime")
.controller("AppController", ["$scope", "data", function ($scope, data) {
	$scope.isVisibleRoot = true;
	$scope.isVisible1 = true;
	$scope.isVisible2 = true;
	$scope.isVisible3 = true;
	$scope.user = {email: ""};

	$scope.sendUser = function (val) {
		data.putUser($scope.user).then(function () {
		$scope.isVisibleRoot = false;
		$scope["isVisible"+val] = false;
		});
	};
}]);