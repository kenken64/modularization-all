var employeeFactory = function (firstName, lastName, gender, hireDate, dateOfBirth) {
    return {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        hireDate: hireDate,
        dateOfBirth: dateOfBirth
    }
};

var person1 = employeeFactory("Roni", "Thomas", "M", "2016-05-01", "1980-01-01");
var person2 = employeeFactory("Kenneth", "Phang", "M", "2016-05-01", "1980-01-01");
var person3 = employeeFactory("Nikhil", "Bhandari", "M", "2016-05-01", "1980-01-01");