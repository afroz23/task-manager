const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./constants/envs');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('<h1>Hello world!</h1>');
});

mongoose.connect(MONGO_URI).then(() => {
	console.log('Successfully connected to MongoDB!');
});

app.listen(8080, () => {
	console.log('server is running...');
});
