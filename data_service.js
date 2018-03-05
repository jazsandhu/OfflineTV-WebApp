// modules
const fs = require('fs'); // file system
const rp = require('request-promise');
const cheerio = require('cheerio');

//JSON to string
var members = [];
var products = [];

//functions
module.exports = {
    initialize: () => {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile('./data/members.json', (err, data) => {
                    members = JSON.parse(data);
                });
            } catch(ex) {
                reject("Unable to read 'members.json' file");
            }
            if (members) {
                resolve("'members.json' file parsed successfully");
            }
        });
    },

    getAllMembers: () => {
        return new Promise((resolve, reject) => {
            if (!members.length == 0) {
                resolve(members);
            } else {
                reject("No member results returned");
            }
        });
    },

    getAllProducts: () => {
        return new Promise((resolve, reject) => {
            const getProducts = {
                url: 'https://teespring.com/api/stores/offline-tv-official-merch/store_products?page=1',
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
    }
}