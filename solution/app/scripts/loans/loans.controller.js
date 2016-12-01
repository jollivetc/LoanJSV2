(function () {
    'use strict';
    angular.module('loan.module')
        .controller('LoansCtrl', LoansCtrl)

    LoansCtrl.$inject = ['LoanService', 'PersonsService'];

    function LoansCtrl(loanService, personsService) {
        var vm = this;
        
        vm.loans = loanService.findAll();
        vm.persons = [];
        vm.newLoan = {}
        vm.addNewLoan = add;
        vm.getColorFromDate = getColorFromDate
        vm.remove = remove

        personsService.getAll().then(function(result){vm.persons = result});


        function refreshLoans(){
            vm.loans = loanService.findAll()
        } 

        var yearInMilliseconds = 1000*60*60*24*365;

        function getColorFromDate(loan){
            var timeOnLoaned = new Date(loan.loanedOn).getTime();
            var now = new Date().getTime();
            return now-timeOnLoaned<yearInMilliseconds?"light-blue":"red";
        }

        function add() {
            loanService.add(vm.newLoan)
                .then(function (returnedLoan) {
                    vm.loans.push(returnedLoan)
                    vm.newLoan ={};
                })
        };

        function remove(loan){
            loanService.remove(loan).then(function(){
                refreshLoans();
            });
        }
    }
})();