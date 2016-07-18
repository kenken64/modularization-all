var Employee = function (firstName, lastName, gender, hireDate, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.hireDate = hireDate;
    this.dateOfBirth = dateOfBirth;
};

var employeeFactory = function (firstName, lastName, gender, hireDate, dateOfBirth) {
    return new Employee(firstName, lastName, gender, hireDate, dateOfBirth)
};

var person1 = employeeFactory("Roni", "Thomas", "M", "2016-05-01", "1980-01-01");
var person2 = employeeFactory("Kenneth", "Phang", "M", "2016-05-01", "1980-01-01");
var person3 = employeeFactory("Nikhil", "Bhandari", "M", "2016-05-01", "1980-01-01");