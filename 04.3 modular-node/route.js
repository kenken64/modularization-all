var Employee = require("./employee")


module.exports = function (app) {
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

    app.get("/bower_components", express.static(__dirname + "/bower_components"));

};