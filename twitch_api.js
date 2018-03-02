const client_ID = "lr7nd0sd36qcdfwr3j3shsbck47s79";

var members = ["Scarra","pokimane","lilypichu","fedmyster","disguisedtoasths","xell_stream","theemarkz","based_yoona","chrischantor","peccapecca","sleightlymusical"];
var status = [];

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

//functions
module.exports = {
    liveStatus: () => {
        return new Promise((resolve, reject) => {
            for (var i = 0; i < members.length; i++) {
                xhr.open('GET', 'https://api.twitch.tv/kraken/streams/' + members[i]);
                xhr.responseType = 'text';
                xhr.onload = () => {
                    if (xhr.readyState === xhr.DONE) {
                        if (xhr.status === 200) {
                            console.log(xhr.response);
                            console.log(xhr.responseText);
                        }
                    }
                };
                xhr.send("null");
            }
        });
    }
}