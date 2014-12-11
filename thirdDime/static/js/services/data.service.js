angular.module('Data', [])
.factory('data', ['$http', function ($http) {
	var service = {}
	service.getVotes = function (index) {
		return $http.get('/core/Dali/' + index).then(function (data) {
			console.log("Got Response: ", data);
			return data.data
		});
	};

	service.putVotes = function (index, vote) {
		$http.post('/core/Dali/' + index, {"vote": vote}).then(function (data) {
			console.log("Got data after post : ", data);
			return data.data
		});
	};

	service.getThoughts = function () {
		$http.get("/core/thoughts").then(function (data) {
			console.log("Got thought data: " + data);
			return data.data
		});
	};

	service.putThoughts = function (name, thought) {
		$http.post("/core/thoughts", {"name": name, "thought": thought}).then(function (data) {
			console.log("Got thought post data: ", data);
			return data.data;
		});
	};

	return service
}])