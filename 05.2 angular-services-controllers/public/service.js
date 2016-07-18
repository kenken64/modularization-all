(function () {
    angular.module("RegApp")
        .service("dbService", dbService);

    dbService.$inject = ["$http"];

    function dbService($http) {
        // service is a variable named here it can be anything vm/ctrl/self etc..
        var service = this;

        service.getEmployee = function () {
            var employee = {};
            employee.firstname = "";
            employee.lastname = "";
            employee.gender = "";
            employee.birthday = "";
            employee.hiredate = "";
            return employee;
        };

        service.save = function (employee, callback) {
            $http.post("/api/employee/save", employee).then(function (result) {
                callback(null, result);
            }).catch(function (err) {
                callback(err);
            });
        };
    }
})();