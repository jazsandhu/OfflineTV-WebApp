// use of modules
    const express = require ('express');
    const app = express();
    const exphbs = require('express-handlebars');
    const bodyParser = require('body-parser');
    const path = require("path");
    const data_service = require("./data_service.js");
    const twitch_api = require("./twitch_api.js");
//

// allow use of local files
app.use(express.static('public'));

// server must liten on port
let HTTP_PORT = process.env.PORT || 8080; 

// successful server connection will output this to console
    function onHttpStart() {
        console.log("Express HTTP server listening on: " + HTTP_PORT);
    }
//

// ensure bodyParser middleware works correctly
app.use(bodyParser.urlencoded({ extended: true }));

// allow .hbs extensions to be handled correctly
    //add the custom Handlebars helper: "equal" and set the global default layout to our layout.hbs file
    app.engine(".hbs", exphbs({ 
        extname: ".hbs", 
        defaultLayout: 'layout',
        helpers: { 
            equal: function (lvalue, rvalue, options) { 
                if (arguments.length < 3) {
                    throw new Error("Handlebars Helper equal needs 2 parameters"); 
                }
                if (lvalue != rvalue) { 
                    return options.inverse(this); 
                } else { 
                    return options.fn(this); 
                }
            }
        }
    }));
    app.set("view engine", ".hbs");
//

// routes
    // home
    app.get("/", (req, res) => {
        res.render("home");
    });
    //members
    app.get("/members", (req, res) => {
        data_service.getAllMembers()
        .then((data) => {
            res.render("members", { data: data, title: "Members"});
        })
        .catch((reason) => {
            res.render("members", { data: {}, title: "Members"});
        });
    });
    // unidentified route
    app.use((req, res) => {
        res.status(404).send("Page Not Found!");
    });
//

//setup http server (listen to HTTP_PORT)
data_service.initialize()
.then(() => {
    app.listen(HTTP_PORT, onHttpStart);
});