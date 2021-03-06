angular.module("Quiz", ["ngMaterial", "Intro", "Que", "Funda"])
.controller("QuizController", ['$scope', '$mdDialog', function ($scope, $mdDialog) {
	"use strict";

	$scope.quizes = [
		{"color": "#8A5C2E", "intro": "What Light is to Impressionist; Color is to Fauv; What Space is to cubist; Motion is to Futurist", "flipped": false},
		{"color": "#296666", "intro": "In dreams we wake up to the starkest realities", "flipped": false},
		{"color": "#000A00", "intro": "Canvas is a two dimensional space, but very often a painter has to step out of such bounds to achieve the unachievable.", "flipped": false},
		{"color": "#3F51B5", "intro": "In Death, the union of heaven and earth", "flipped": false},
		{"color": "#2F4166", "intro": "The story of Armida, a Saracen sorceress and Rinaldo, a soldier in the First Crusade, was created by the Italian poet Torquato Tasso. Over time a large number of painters have brought this story to canvas. Rinaldo is a fierce, determined warrior. Armida has been sent to stop the Christians from completing their mission and is about to murder the sleeping soldier, but instead falls in love with him at first sight. She is now conflicted and confused by her changing emotions. ", "flipped": false},
		{"color": "#825682", "intro": "That the Immaculate Mother of God, the ever Virgin Mary, having completed the course of her earthly life, was borne by angels into heaven", "flipped": false},
		{"color": "#478D5E", "intro": "It starts with a simple desire to replicate all that is explicit", "flipped": false},
		{"color": "#A34747", "intro": "War does not determine who is right, only who is left", "flipped": false},
		{"color": "#6C6C50", "intro": "Marie Antoinette was the last Queen of France. During her reign her popularity amongst her subjects saw a downward curve. The painting that you are looking for can very well be called her last attempt at improving her public image.", "flipped": false},
		{"color": "#A34747", "intro": "Relax for a couple of minutes, enjoy the painting that is to follow. Then click on the painting and let your thoughts transcend into words.", "flipped": false},
	];

	var showFunda = function (index, val) {
		var quiz = $scope.quizes[index];
		var fundaDialog = {templateUrl: "static/js/funda/funda" + (index+1) + ".modal.html", controller: "FundaController", locals : {"result": false, 'color': quiz.color}};

		if (val) {
			fundaDialog.locals.result = true;
		} else {
			fundaDialog.locals.result = false;
		}

		$mdDialog.show(fundaDialog).then(function (val) {
			quiz.flipped = !quiz.flipped;
			if (val === "back"){
				showQue(index);
			} else if (val){
				$scope.showIntro(index+1);
			}
		}, function () {
			quiz.flipped = !quiz.flipped;
		});
	}

	var showQue = function (index) {
		var queDialog = {templateUrl: "static/js/question/question" + (index+1) + ".modal.html", controller: "QueController", locals: {"index": index}};

		$mdDialog.show(queDialog).then(function (val) {
			if (val === "back"){
				$scope.showIntro(index);
			} else {
				showFunda(index, val);
			}
			
		}, function () {});
	};

	$scope.showIntro = function (index) {
		var quiz = $scope.quizes[index];
		var introDialog = {templateUrl: "static/js/intro/intro.modal.html", controller: "IntroController", locals: {"intro": quiz.intro, 'color': quiz.color, 'index': index}};

		$mdDialog.show(introDialog).then(function (val) {
			if (val === "back"){
				showFunda(index-1, false);
			} else {
				showQue(index);
			}

		}, function () {});
	};
}]);