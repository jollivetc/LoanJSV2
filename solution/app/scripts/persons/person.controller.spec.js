"use strict";

describe('persons controller', function(){
    beforeEach(function(){
        module('loanApp');
    })
    describe('personCtrl', function(){
        var fakeData = ['bob']
        var fakePromise = {
            then : function(callback){
                    callback(fakeData)
                }
        };
        var fakePersonService = {
            getAll: function(){ return fakePromise}
        }
        it('should call person service and expose the result',function(){
            inject(function($controller){
                var personCtrl = $controller('PersonsCtrl', {PersonsService:fakePersonService})
                expect(personCtrl.persons).toBe(fakeData)
            })
        })
    })
})