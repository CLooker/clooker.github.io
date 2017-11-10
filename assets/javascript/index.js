$(document).ready(function() {
	$(".getRandomProject").on("click", getRandomProject.bind(this));

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
		"https://github.com/CLooker/If-McDonalds-Fits-Your-Calories"
	];

	function getRandomProject() {
		// const randomIndex = getRandomInt(0,12);
		// const randomProject = projectArr[randomIndex];
		// const randomProject = projectArr[getRandomInt(0,12)];
		// const openRandomProject = $(event.target);
		// openRandomProject.attr("target", "_blank");
		window.open(projectArr[getRandomInt(0,12)]);
		// console.log('openRandomProject: ', openRandomProject);
		// console.log('randomProject: ', projectArr[getRandomInt(0,12)])

	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});