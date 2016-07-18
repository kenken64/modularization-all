(function () {
    angular
        .module("RegApp", [])
        .controller("RegCtrl", RegCtrl);

    RegCtrl.$inject = ["$http"];

    function RegCtrl($http) {
        vm = this;
        vm.employee = {};
        vm.employee.firstname = "";
        vm.employee.lastname = "";
        vm.employee.gender = "";
        vm.employee.birthday = "";
        vm.employee.hiredate = "";
        vm.status = {
            message: "",
            code: 0
        };

        vm.register = function () {
            $http.post("/api/employee/save", vm.employee).then(function (result) {
                console.info(result);
                vm.status.message = "Inserted successfully";
                vm.status.code = 202;
            }).catch(function () {
                vm.status.message = "An error occured.";
                vm.status.code = 400;
            });
        }
    }
})();