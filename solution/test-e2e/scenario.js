'use strict';


describe('filter', function(){
    it('should filter', function () {
        browser.get('http://localhost:9000/#!/list/loans');   

        var firstTitle = element.all(by.tagName('card-cmp')).first().element(by.binding('$ctrl.title')).getText();
        expect(firstTitle).toBe('SABRE LASER');

        element(by.model('loansCtrl.filterCriteria')).sendKeys('tour');
        
        firstTitle = element.all(by.tagName('card-cmp')).first().element(by.binding('$ctrl.title')).getText();
        expect(firstTitle).toBe('TOURNEVIS SONIQUE');
    });
});