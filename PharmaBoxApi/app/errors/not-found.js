const BaseError = require('./base');

class NotFoundError extends BaseError {

	constructor(message, data) {
		super(message, 404, data);
	}

}

module.exports = NotFoundError;