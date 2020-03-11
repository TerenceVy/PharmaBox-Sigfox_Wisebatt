const BaseAutoBindedClass = require('../base/base-autobind');
const Socket = require('../sockets');

class BaseController extends BaseAutoBindedClass {

	constructor(model) {
		super();
		this._model = model;
		this._notFoundError = require('../errors/not-found');
	}

	getAll(callback) {
		this._model.find(callback);
	}

	delete(query, callback) {
		this._model.deleteMany(query, callback);
	}

	update(data, callback) {
		this.getAll((error, entities) => {
			if (error) return callback(error);
			if (!entities.length) return callback(new this._notFoundError('DISTRIBUTOR_NOT_FOUND'));

			this._model.updateMany({ _id: entities[0]._id }, data, error => {
				if (error) return callback(error);

				this.getAll((error, entities) => {
					if (error) return callback(error);
					if (!entities.length) return callback(new this._notFoundError('DISTRIBUTOR_NOT_FOUND'));

					Socket.sendProductMessage({ result: entities });
					callback(null, entities);
				});
			});
		});
	}

	create(data, callback) {
		let model = new this._model(data);

		model.save(callback);
	}

}

module.exports = BaseController;