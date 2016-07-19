var mysql = require("mysql");

var pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password@123",
    database: "employees",
    connectionLimit: 4
});

const INSERTSQL = "insert into employees (first_name, last_name, gender, birth_date, hire_date) values (?,?,?,?,?)";

var Employee = function (firstName, lastName, gender, hireDate, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.hireDate = hireDate;
    this.birthDate = birthDate;
};

Employee.prototype.save = function (callback) {
    var employee = this;
    pool.getConnection(function (err, connection) {

        if (err) {
            return callback(err);
        }

        var values = [employee.firstName, employee.lastName, employee.gender, employee.hireDate, employee.birthDate];

        connection.query(INSERTSQL, values, function (err, result) {

            connection.release();

            if (err) {
                return callback(err);
            }

            callback(null, result);

        });
    });
};

module.exports = Employee
