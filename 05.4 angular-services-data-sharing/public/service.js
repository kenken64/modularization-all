(function () {
    angular.module("RegApp")
        .service("dbService", dbService);

    dbService.$inject = ["$http", "$q"];

    function dbService($http, $q) {
        // service is a variable named here it can be anything vm/ctrl/self etc..
        var service = this;

        service.employees = [];

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
            var defer = $q.defer();

            $http.post("/api/employee/save", employee).then(function (result) {
                service.employees.push(employee);
                console.log(service.employees);
                defer.resolve(result);
            }).catch(function (err) {
                defer.reject(err);
            });

            return defer.promise;
        };
    }
})();