var subscribeModule = angular.module('Subscribe', ['Data'])
.config(['$httpProvider', function ($httpProvider) {
	"use strict";

    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

subscribeModule.controller('SubscribeController', ['$scope', 'data', function ($scope, data) {
	'use strict';
	$scope.user = {email: ""};
	$scope.visible = true;

	$scope.subscribe = function () {
		data.putUser($scope.user).then(function () {
			$scope.visible = false;
		});
	};
}]);