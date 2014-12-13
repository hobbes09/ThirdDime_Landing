angular.module('Data', [])
.factory('data', ['$http', function ($http) {
	var service = {}
	service.getVotes = function (index) {
		return $http.get('/core/Dali/' + index).then(function (data) {
			return data.data
		});
	};

	service.putVotes = function (index, vote) {
		$http.post('/core/Dali/' + index, {"vote": vote}).then(function (data) {
			return data.data
		});
	};

	service.getThoughts = function () {
		$http.get("/core/thoughts").then(function (data) {
			return data.data
		});
	};

	service.putThoughts = function (name, thought) {
		$http.post("/core/thoughts", {"name": name, "thought": thought}).then(function (data) {
			return data.data;
		});
	};

	service.putUser = function (user) {
		return $http.post("/core/adopters", user).then(function (data) {
			return data.data
		});
	};

	return service
}])