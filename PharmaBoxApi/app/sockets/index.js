const BaseAutoBindedClass = require('../base/base-autobind');

class Socket extends BaseAutoBindedClass {

	constructor() {
		super();
	}

	init(server) {
		Socket._io = require('socket.io')(server);

		this.io.on('connection', socket => {
			console.log('client connected');

			socket.on('disconnect', () => {
				console.log('client disconnected')
			});
		});

	}

	sendProductMessage(message) {
		this.io.emit('product', message);
	}

	get io() {
		return Socket._io;
	}

}

module.exports = new Socket();