angular.module("ThirdDime", ["Quiz", "ngSocial", "Data", "ngAnimate"])
.config(['$httpProvider', function ($httpProvider) {
	"use strict";

    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);