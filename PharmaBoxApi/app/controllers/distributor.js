const BaseController = require('./base');

class DistributorController extends BaseController {

	constructor() {
		super(require('../models/distributor'));
	}

	getAll(callback) {
		super.getAll(callback);
	}

	update(data, callback) {
		super.update(data, callback);
	}

	create(data, callback) {
		this.getAll((error, entities) => {
			if (error) return callback(error);
			if (entities.length) this.delete({ _id: entities[0]._id }, () => { });

			super.create({
				name: 'PharmaBox',
				location: 'Paris - France',
				status: true,
				coordinates: {
					latitude: 48.8139691,
					longitude: 2.3924524
				},
				products: [{
					name: 'Doliprane',
					quantity: 9
				}]
			}, callback);
		});
	}

}

module.exports = new DistributorController();