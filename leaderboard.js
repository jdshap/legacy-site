var board = [];
var currentSelection;

const scoreboard = document.getElementById("scores");

lb_getData();

function lb_getData() {
	return fetch('http://jdshap.github.io/leaderboard', {method: "GET"}).then(response => response.json()).then(json => json.sort(scoresort)).then(sorted => {
		scoreboard.innerHTML = ``;
		sorted.slice(0, 10).forEach(score => {
			scoreboard.innerHTML += `<div class="player" id="pl${score.id}">${score.name} <span class="score">${score.score}</span></div>`;
		});
		
		var players = document.getElementsByClassName("player");
		[...players].forEach(player => {
			player.addEventListener("click", e => {selectItem(e.target)});
		});
	});
}

function selectItem(element) {
	currentSelection=parseInt(element.id.substr(2));
}

function lb_postData() {
	fetch('http://jdshap.github.io/leaderboard', {method: "POST", body: {name: faker.internet.userName(), score: faker.random.number({min:0, max:8000})}})
	.then(lb_getData());
}

function lb_deleteData() {
	if(currentSelection !== undefined) {
		fetch('http://jdshap.github.io/leaderboard', {method: "DELETE", body: {id: currentSelection}})
		.then(lb_getData());
	}
}

function scoresort(a,b) {
	return (a.score == b.score) ? 0 : (a.score < b.score) ? 1 : -1
}
