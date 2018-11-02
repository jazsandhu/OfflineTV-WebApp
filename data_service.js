// modules
const fs = require('fs'); // file system
const rp = require('request-promise');
const request = require('request-promise');

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

	currentlyLive: () => {
		return new Promise((resolve, reject) => {
			var live = [];
			let twitchUrl = [
				{ url: members[0].twitchUrl, json: true },
				{ url: members[1].twitchUrl, json: true },
				{ url: members[2].twitchUrl, json: true },
				{ url: members[3].twitchUrl, json: true },
				{ url: members[4].twitchUrl, json: true },
				{ url: members[5].twitchUrl, json: true },
				{ url: members[6].twitchUrl, json: true },
				{ url: members[7].twitchUrl, json: true },
				{ url: members[8].twitchUrl, json: true },
				{ url: members[9].twitchUrl, json: true },
			];
			for (i in twitchUrl) {
				rp(twitchUrl[i]).then((JSON_Data) => {
					live.push(JSON_Data.stream);
					if (live.length == twitchUrl.length) {
						resolve(live.filter(Boolean));
					}
				});
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

	youtubeVideos: () => {
		return new Promise((resolve, reject) => {
			let getVideos = { url:'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDCp2-BkYT62kFu-zLmdUSPAHD_XTM6pDI&channelId=UCrDQW9kAElm707c5z6d5r7Q&part=snippet,id&order=date&maxResults=20', json: true };
			rp(getVideos)
				.then((data) => {
					console.log(data);
					resolve(data);
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