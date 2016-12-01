'use strict';
describe('loanApp', function(){
    beforeEach(function () {
        module('loanApp');
    });

    describe('LoansCtrl', function(){

        var loansCtrl, loanServiceMock, personServiceMock;
        beforeEach(function(){
            var fakeAddPromise ={
                then:function(callback){callback("result")}
            } ;
            var fakePersonsPromise={
                then : function(callback){callback("persons")}
            }
            var fakeRemovePromise ={
                then: function(callback){callback("result")}
            }
            loanServiceMock = {
                findAll: function(){},
                add:function(){return fakeAddPromise},
                remove:function(){return fakeRemovePromise}
            };
            personServiceMock = {getAll:function(){return fakePersonsPromise}}

            spyOn(loanServiceMock, 'findAll').and.returnValue(['loans']);
            spyOn(loanServiceMock, 'add').and.callThrough();
            spyOn(loanServiceMock, 'remove').and.callThrough();
            spyOn(personServiceMock, 'getAll').and.callThrough();
        })
        beforeEach(inject(function($controller){
            loansCtrl = $controller('LoansCtrl', {
                LoanService: loanServiceMock,
                PersonsService: personServiceMock
            });
        }));
        it('should call personService.getAll and expose result', function(){
            expect(personServiceMock.getAll).toHaveBeenCalled();
            expect(loansCtrl.persons).toEqual("persons");
        })

        it('should call findAll on LoanService and exposed the result ', function () {
            expect(loansCtrl.loans).toEqual(["loans"]);
        });
        it('should call add on LoanService with its newLoanProperty when addNewLoan is called and push the promise result to loans', function(){
            var newLoan = "newLoan";
            loansCtrl.newLoan = newLoan;
            loansCtrl.addNewLoan();
            expect(loanServiceMock.add).toHaveBeenCalledWith(newLoan);
            expect(loansCtrl.loans).toContain("result");
        })
        it('should call removeLoan on LoanService when remove is called and refreshLoans on promise resolution', function(){
            loansCtrl.remove("aLoan");
            expect(loanServiceMock.remove).toHaveBeenCalledWith("aLoan");
            expect(loanServiceMock.findAll).toHaveBeenCalled();
        })
    });
});
