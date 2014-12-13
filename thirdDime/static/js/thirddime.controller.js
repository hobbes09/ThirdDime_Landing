angular.module("ThirdDime")
.controller("AppController", ["$scope", "data", function ($scope, data) {
	$scope.isVisible = true;
	$scope.user = {email: ""};

	$scope.sendUser = function () {
		data.putUser($scope.user).then(function () {
		$scope.isVisible = false;
		});
	};
}]);