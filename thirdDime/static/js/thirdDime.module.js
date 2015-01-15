angular.module("ThirdDime", ["Quiz", "ngSocial", "Data", "ngAnimate", "angulartics", "angulartics.google.analytics", "angulartics.mixpanel"])
.config(['$httpProvider', function ($httpProvider) {
	"use strict";

    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);