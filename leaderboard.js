var board = [];
var currentSelection;

const scoreboard = document.getElementById("scores");
var players;

lb_getData();

function lb_getData() {
	return fetch('http://jdshap.github.io/leaderboard', {method: "GET"}).then(response => response.json()).then(json => json.sort(scoresort)).then(sorted => {
		scoreboard.innerHTML = ``;
		sorted.slice(0, 10).forEach(player => {
			scoreboard.innerHTML += `<div class="player" id="pl${player.id}" data-name="${player.name}" data-score="${player.score}">
				<span>${player.name}</span>
				<span class="score">${player.score}</span>
			</div>`;
		});
		
		players = document.getElementsByClassName("player");
		[...players].forEach(player => {
			player.addEventListener("click", selectItem);
		});
	});
}

function selectItem(event) {
	var element = event.target;
	currentSelection=parseInt(element.id.substr(2));
	try {
		var oldSelection = document.getElementsByClassName("selected")[0]
		var oldHtml = oldSelection.innerHTML;
		var oldName = oldSelection.getAttribute("data-name");
		var oldScore = oldSelection.getAttribute("data-score");
		oldSelection.addEventListener("click", selectItem);
		document.getElementsByClassName("selected")[0].innerHTML =  `<span>${oldName}</span>
		<span class="score">${oldScore}</span>`;
	} catch(err) {}
	[...players].forEach(player => { player.classList.remove("selected") });
	element.classList.add("selected");
	var html = element.innerHTML;
	var name = element.getAttribute("data-name");
	var score = element.getAttribute("data-score");
	element.innerHTML = `<input type="text" name="name" value="${name}"></input>
		<input class="score" type="text" name="score" value="${score}"></input>`;
	element.removeEventListener("click", selectItem);
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
