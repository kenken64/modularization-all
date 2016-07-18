var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require("./route")(app);

app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
    console.info("App Server started on port 3000");
});

