var Employee = function (firstName, lastName, gender, hireDate, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.hireDate = hireDate;
    this.birthDate = birthDate;
};

var person1 = new Employee("Roni", "Thomas", "M", "2016-05-01", "1980-01-01");
console.log(person1);
var person2 = new Employee("Kenneth", "Phang", "M", "2016-05-01", "1980-01-01");
console.log(person1);
var person3 = new Employee("Nikhil", "Bhandari", "M", "2016-05-01", "1980-01-01");
console.log(person1);

// Try executing above statements without "new" keyword
