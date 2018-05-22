import express from 'express';

const app = express();

app.use(express.static('dist'));

app.get('/', (_, res) => {
	const template = `
	<link href="https://fonts.googleapis.com/css?family=Sunflower:300" rel="stylesheet">
	<style>
		body {
			font-family: 'Sunflower', sans-serif;
			background: #6f309f;
			color: white;
			font-size: 150px;
		}
		#root {
			margin: 0 auto;
			width: 800px;
			padding-top: 200px;
			text-align: center;
		}
		.counter {
			display: flex;
			max-width: 400px;
			align-items: center;
			margin: auto;
		}
		.counter button {
			flex: 0;
			font-size: 80px;
			color: white;
			border: none;
			color: #eb574f;
			background: none;
			cursor: pointer;
			margin: 20px;
		}

		.counter .value {
			flex: 1;
			font-weight: 500;
		}
	</style>
	<body>
		<div id="root"></div>
	</body>
	<script src="bundle.js"></script>
	`;

	res.send(template);
});

app.listen(8080);
