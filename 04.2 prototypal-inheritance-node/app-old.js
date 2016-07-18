var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password@123",
    database: "employees",
    connectionLimit: 4
});

const INSERTSQL = "insert into employees (first_name, last_name, gender, birth_date, hire_date) values (?,?,?,?,?)";

app.post("/api/employee/save", function (req, res) {
    console.info("Insert a employee record");
    pool.getConnection(function (err, connection) {
        if (err) {
            res.status(500).end();
            return;
        }
        var gender = req.body.gender == 'male' ? 'M' : 'F'; //if enum fields
        console.info(req.body.birthday);
        console.info(req.body.hiredate);
        var birthDate = req.body.birthday.substring(0, req.body.birthday.indexOf('T'));
        var hireDate = req.body.hiredate.substring(0, req.body.hiredate.indexOf('T'));
        connection.query(INSERTSQL, [req.body.firstname, req.body.lastname, gender, birthDate,
            hireDate], function (err, result) {
            connection.release();
            if (err) {
                console.info(err);
                res.status(500).end();
                return;
            }
            console.info(result);
            console.info(result.insertId);
            res.status(202).json({url: "/api/employee/" + result.insertId});
        });
    });
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
    console.info("App Server started on port 3000");
});

