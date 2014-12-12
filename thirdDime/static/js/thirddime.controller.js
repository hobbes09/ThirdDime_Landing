angular.module("ThirdDime")
.controller("AppController", ["$scope", "data", function ($scope, data) {
	$scope.isVisible = true;
	$scope.user = {name: "", email: ""};

	$scope.sendUser = function () {
		console.log("Posting: ", $scope.user)
		data.putUser($scope.user).then(function () {
		$scope.name = $scope.user.name;
		$scope.isVisible = false;
		});
	};
}]);