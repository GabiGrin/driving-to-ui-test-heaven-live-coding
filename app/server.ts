import express from 'express';

const app = express();

app.use(express.static('dist'));

app.get('/', (_, res) => {
	const template = `
	<style>
		#root {
			margin: 0 auto;
			width: 800px;
		}
		.counter {
			font-size: 30px;
			display: flex;
			max-width: 400px;
			flex-align: center;
		}
		.counter button {
			flex: 0;
			margin: 20px;
			font-size: 30px;
			border-radius: 41px;
			height: 50px;
			width: 50px;
		}

		.counter .value {
			flex: 1;
			font-size: 50px;
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
