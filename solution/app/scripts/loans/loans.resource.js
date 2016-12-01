(function () {
    'use strict';
    angular.module('loan.module')
        .factory('Loan', Loan);

    Loan.$inject = ['$resource'];

    function Loan($resource) {
        var LoanService = $resource(
            'http://localhost:3000/loans/:loanId', {loanId:'@id'}, {
                update: {
                    method: 'PUT'
                }
            }
        );
        return LoanService;
    };
})()