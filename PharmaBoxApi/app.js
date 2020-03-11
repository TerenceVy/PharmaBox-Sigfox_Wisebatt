const CONFIG = require('./config');

const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./app/sockets').init(server);

mongoose.connect(CONFIG.uri.mongodb, { useNewUrlParser: true }, (err) => {
	if (err) console.error(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	next();
});

app.use('/', require('./app/routes'));

server.listen(CONFIG.server.port, () => {
	console.log('App is running on ' + CONFIG.server.port);
	require('./app/manager/sigfox');
});