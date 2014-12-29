angular.module("ThirdDime", ["Quiz", "ngSocial", "Data", "ngAnimate"])
.config(['$httpProvider', '$interpolateProvider', function ($httpProvider, $interpolateProvider) {
  // $interpolateProvider.startSymbol('{[{');
  // $interpolateProvider.endSymbol('}]}');

    // csrf for django 
    // $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);