(function () {
    angular.module("RegApp")
        .service("dbService", dbService);

    dbService.$inject = ["$http"];

    function dbService($http) {
        var ctrl = this;

        ctrl.getEmployee = function () {
            var employee = {};
            employee.firstname = "";
            employee.lastname = "";
            employee.gender = "";
            employee.birthday = "";
            employee.hiredate = "";
            return employee;
        };

        ctrl.save = function (employee, callback) {
            $http.post("/api/employee/save", employee).then(function (result) {
                callback(null, result);
            }).catch(function () {
                callback(null)
            });
        };
    }
})();