$(document).ready(function() {
	$(".getRandomProject").on("click", getRandomProject);

	const projectArr = [
		"https://github.com/CLooker/StarWarsRPG",
		"https://github.com/CLooker/week-4-game",
		"https://github.com/CLooker/liri-node-app",
		"https://github.com/CLooker/Eloquent_JS_Solutions",
		"https://github.com/CLooker/TriviaGame",
		"https://github.com/CLooker/Train-Scheduler",
		"https://github.com/CLooker/Friend-Finder",
		"https://github.com/CLooker/burger",
		"https://github.com/CLooker/If-McDonalds-Fits-Your-Calories",
		"https://github.com/CLooker/Hangman-Game",
		"https://github.com/CLooker/Giphy-Generator",
		"https://github.com/CLooker/bamazon",
		"https://github.com/CLooker/If-McDonalds-Fits-Your-Calories",
		"https://github.com/CLooker/udacity-react-project1"
	];

	function getRandomProject() {
		window.open(projectArr[getRandomInt(0,projectArr.length-1)]);
	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});