var Employee = function (firstName, lastName, gender, hireDate, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.hireDate = hireDate;
    this.birthDate = birthDate;
};

var employeeFactory = function (firstName, lastName, gender, hireDate, birthDate) {
    return new Employee(firstName, lastName, gender, hireDate, birthDate)
};

var person1 = employeeFactory("Roni", "Thomas", "M", "2016-05-01", "1980-01-01");
var person2 = employeeFactory("Kenneth", "Phang", "M", "2016-05-01", "1980-01-01");
var person3 = employeeFactory("Nikhil", "Bhandari", "M", "2016-05-01", "1980-01-01");