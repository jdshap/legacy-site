fetch('http://jdshap.github.io/leaderboard', {method: "GET"}).then(response => response.json()).then(function log(json) {console.log({json})});


function postData() {
	fetch('http://jdshap.github.io/leaderboard', {method: "POST", body: {name: faker.internet.userName(), score: faker.random.number()}});
	fetch('http://jdshap.github.io/leaderboard', {method: "GET"}).then(response => response.json()).then(function log(json) {console.log({json})});
}