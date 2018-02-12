const express = require ('express');
const app = express();

let HTTP_PORT = process.env.PORT || 8080; 

function onHttpStart() {
    console.log("Express HTTP server listening on: " + HTTP_PORT);
}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(HTTP_PORT, onHttpStart);