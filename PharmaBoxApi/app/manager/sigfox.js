const BaseAutoBindedClass = require('../base/base-autobind');
const axios = require('axios');

const DistributorController = require('../controllers/distributor');

class SigfoxManager extends BaseAutoBindedClass {

	constructor() {
		super();
		this.endpoint = 'https://backend.sigfox.com/api/devices/12CAB95/messages';
		this.authentication = {
			auth: {
				username: '5cdd72570499f50970788736',
				password: 'dd9c10746b7f8cfabca7b039ca73b5ff'
			}
		};
		this.interval = 5000;
		this.getMessages();
		setInterval(this.getMessages, this.interval);
	}

	getMessages() {
		axios.get(this.endpoint, this.authentication)
			.then(response => {
				console.log('lastMessage: ' + this.hexToAscii(response.data.data[0].data).split('|')[1]);
				DistributorController.update({
					$set: {
						'products.$[]': {
							name: 'Doliprane',
							quantity: this.hexToAscii(response.data.data[0].data).split('|')[1]
						}
					}
				}, () => {});
			})
			.catch(error => {
				console.log(error.response);
			});
	}

	hexToAscii(hex) {
		let str = '';
		for (let n = 0; n < hex.length; n += 2) {
			str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
		}
		return str;
	}

}

module.exports = new SigfoxManager();