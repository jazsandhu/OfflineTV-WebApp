//JSON to string
var members = [];

// file system
const fs = require('fs');

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
    }
}