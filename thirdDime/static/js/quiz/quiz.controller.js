angular.module("Quiz", ["ngMaterial", "Intro"])
.controller("QuizController", ['$scope', '$mdDialog', function ($scope, $mdDialog) {
	$scope.quizes = [
		{"intro": "this is gonna be fun", "question": "Whats shakin Bro1?", "funda": "Life is good with a bud.", "flipped": false},
		{"intro": "this is gonna be fun", "question": "Whats shakin Bro2?", "funda": "Life is good with a bud.", "flipped": false}
	];

	$scope.askQuestion = function (index) {
		var quiz = $scope.quizes[index];
		// $mdDialog.show(
  //     $mdDialog.alert()
  //       .title('This is an alert title')
  //       .content('You can specify some description text in here.')
  //       .ariaLabel('Password notification')
  //       .ok('Got it!')
  //   );
		// introDialog = {"templateUrl": "js/intro/intro.modal.html", controller:"IntroController", "locals": {"intro": quiz.intro}};
		// $mdDialog.show(introDialog);

		// Only if quiz completed you flip.
		quiz.flipped = !quiz.flipped;
	};
}]);