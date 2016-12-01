(function () {
    'use strict';
    angular.module('loan.module')
        .service('LoanService', LoanService);

    LoanService.$inject = ['Loan'];

    function LoanService(Loan) {
        this.findAll = findAll;
        this.getById = getById;
        this.add = add;
        this.remove = remove
        
        function findAll(){
            return Loan.query();
        }
        
        function getById(id){
            return Loan.query({id: id});
        }
        
        function add(newLoan){
            var loanToSave = new Loan(newLoan);
            loanToSave.loanedOn= new Date();
            return loanToSave.$save();
        }

        function remove(loan){
            return loan.$delete();
        }
    }
})()