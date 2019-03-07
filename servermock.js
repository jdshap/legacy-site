const leaderboard = [];
var id = 0;
function addScore(name, score) {
	leaderboard.push({id: id, name: name, score: score});
	id++;
}

for( var i = 0; i < 10; i++) {
	addScore(faker.internet.userName(), faker.random.number({min:0, max:8000}));
}

//leaderboard mock
fetch_mock
	.get('http://jdshap.github.io/leaderboard', {body: leaderboard})
	.post('http://jdshap.github.io/leaderboard', function postScore(url, data) {
		try {
			//Ensure score's type is a number
			try {
				data.body.score === 0;
			} catch(err) {
				return 400;
			}
			addScore(data.body.name, data.body.score);
		} catch(err) {
			return 400;
		}
		return 200;
	})
	.put('http://jdshap.github.io/leaderboard', function postScore(url, data) {
		try {
			data.body.id === 0 && data.body.score === 0;
		} catch(err) {
			return 400;
		}
		var temp = JSON.parse(JSON.stringify(leaderboard));
		leaderboard.length = 0;
		temp.map(function(obj) {
			if(obj.id !== data.body.id) leaderboard.push(obj)
				else leaderboard.push({...data.body});
		}, []);
		return 200;
	})
	.delete('http://jdshap.github.io/leaderboard', function rmScore(url, data) {
		try {
			data.body.id === 0;
		} catch(err) {
			return 400;
		}
		var temp = JSON.parse(JSON.stringify(leaderboard));
		leaderboard.length = 0;
		temp.map(function(obj) {
			if(obj.id !== data.body.id) leaderboard.push(obj);
		}, []);
		return 200;
	})
	.catch('http://jdshap.github.io/leaderboard', 405);