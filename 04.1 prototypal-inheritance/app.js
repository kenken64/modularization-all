var Employee = function (firstName, lastName, gender, hireDate, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.hireDate = hireDate;
    this.birthDate = birthDate;
};

Employee.prototype.save = function () {
    console.log("Not yet implemented. Let's assume it saves the data");
};

var person3 = new Employee("Nikhil", "Bhandari", "M", "2016-05-01", "1980-01-01");

//what is the output?
person3.save();
