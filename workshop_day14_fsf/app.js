var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes");

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/api/employee/save", routes.saveEmployee);

app.use(express.static(__dirname + "/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.listen(3000, function () {
    console.info("App Server started on port 3000");
});
