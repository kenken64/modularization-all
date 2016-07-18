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

var Employee = function (firstName, lastName, gender, hireDate, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.hireDate = hireDate;
    this.dateOfBirth = dateOfBirth;
};

Employee.prototype.save = function (callback) {
    var employee = this;
    pool.getConnection(function (err, connection) {

        if (err) {
            callback(err);
        }

        var values = [employee.firstName, employee.lastName, employee.gender, employee.hireDate, employee.dateOfBirth];

        connection.query(INSERTSQL, values, function (err, result) {

            connection.release();

            if (err) {
                callback(err);
            }

            callback(null, result);

        });
    });
};

app.post("/api/employee/save", function (req, res) {

    var gender = req.body.gender == 'male' ? 'M' : 'F'; //if enum fields
    var birthDate = req.body.birthday.substring(0, req.body.birthday.indexOf('T'));
    var hireDate = req.body.hiredate.substring(0, req.body.hiredate.indexOf('T'));

    var employee = new Employee(
        req.body.firstName,
        req.body.lastName,
        gender,
        hireDate,
        dateOfBirth
    );

    employee.save(function (err, result) {
        if (err) {
            res.status(500).end();
            // Don't forget to add a return statement here.
            return console.log("Some Error occured");
        }
        console.log("Saved Employee Successfully");
        res.status(202).json({url: "/api/employee/" + result.insertId});
    });

});

app.use(express.static(__dirname + "/public"));
app.get("/bower_components", express.static(__dirname + "/bower_components"));

app.listen(3000, function () {
    console.info("App Server started on port 3000");
});

