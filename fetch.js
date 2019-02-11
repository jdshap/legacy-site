console.log({window});

const leaderboard = [
		{name: faker.internet.userName(), score: faker.random.number()},
		{name: faker.internet.userName(), score: faker.random.number()}
	]

fetch_mock
	.get('http://jdshap.github.io/leaderboard', {body: leaderboard})
	.post('http://jdshap.github.io/leaderboard', function addScore(url, data) {leaderboard.push(data.body); return 200;});