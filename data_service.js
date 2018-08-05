// modules
const fs = require('fs'); // file system
const rp = require('request-promise');

//JSON to string
var members = [];

//functions
module.exports = {
	initialize: () => {
		return new Promise((resolve, reject) => {
			try {
				fs.readFile('./data/members.json', (err, data) => {
					members = JSON.parse(data);
				});
				fs.readFile('./data/toast_store.json', (err, data) => {
					toastProducts = JSON.parse(data);
				});
				fs.readFile('./data/poki_store.json', (err, data) => {
					pokimaneProducts = JSON.parse(data);
				});
			} catch (ex) {
				reject("Unable to read data/.json files");
			}
			if (members) {
				resolve("'members.json' file parsed successfully");
			}
			if (toastProducts) {
				resolve("'toastProducts.json' file parsed successfully");
			}
		});
	},

	getAllMembers: () => {
		return new Promise((resolve, reject) => {
			resolve(members);
		});
	},

	offlineTvProducts: () => {
		return new Promise((resolve, reject) => {
			const getProducts = {
				url: 'https://teespring.com/api/stores/offline-tv-official-merch/store_products',
				json: true
			}
			rp(getProducts)
				.then((data) => {
					resolve(data.products);
				})
				.catch(() => {
					reject("No product results returned");
				});
		});
	},

	toastProducts: () => {
		return new Promise((resolve, reject) => {
			resolve(toastProducts);
		});
	},

	pokimaneProducts: () => {
		return new Promise((resolve, reject) => {
			resolve(pokimaneProducts);
		});
	}
}