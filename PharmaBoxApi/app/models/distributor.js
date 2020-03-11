const mongoose = require('mongoose');

module.exports = mongoose.model('distributor', new mongoose.Schema({
	name: {
		type: String, required: true
	},
	location: {
		type: String, required: true
	},
	status: {
		type: Boolean, default: true
	},
	coordinates: {
		latitude: {
			type: Number
		},
		longitude: {
			type: Number
		}
	},
	products: [{
		name: {
			type: String, required: true
		},
		quantity: {
			type: Number, default: 0
		}
	}]
}));