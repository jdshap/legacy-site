var board = [];

const scoreboard = document.getElementById("scores");

lb_getData();

function lb_getData() {
	fetch('http://jdshap.github.io/leaderboard', {method: "GET"}).then(response => response.json()).then(json => json.sort(scoresort)).then(sorted => {
		scoreboard.innerHTML = ``;
		sorted.slice(0, 10).forEach(score => {
			scoreboard.innerHTML += `<div>${score.name} <span class="score">${score.score}</span></div>`;
		});
	});
}

function lb_postData() {
	fetch('http://jdshap.github.io/leaderboard', {method: "POST", body: {name: faker.internet.userName(), score: faker.random.number({min:0, max:8000})}});
	lb_getData();
}

function lb_deleteData(id) {
	fetch('http://jdshap.github.io/leaderboard', {method: "DELETE", body: {id: id}});
	lb_getData();
}

function scoresort(a,b) {
	return (a.score == b.score) ? 0 : (a.score < b.score) ? 1 : -1
}
