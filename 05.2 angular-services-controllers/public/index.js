(function () {
    angular
        .module("RegApp", [])
        .controller("RegCtrl", RegCtrl);


    //Try removing DB service from this line? Does the console.log from service still gets printed??
    RegCtrl.$inject = ["$http", "dbService"];

    function RegCtrl($http, dbService) {
        var vm = this;
        vm.employee = dbService.getEmployee();

        vm.status = {
            message: "",
            code: 0
        };

        vm.register = function () {
            dbService(vm.employee).save(function (err, result) {
                if (err) {
                    vm.status.message = "An error occurred.";
                    vm.status.code = 400;
                    return console.log(err);
                }

                vm.status.message = "Inserted successfully";
                vm.status.code = 202;

                console.log(result);
            });
        }
    }
})();