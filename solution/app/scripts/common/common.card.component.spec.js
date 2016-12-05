'use strict';

describe('component : cardCmp', function () {
    var $componentController;

    beforeEach(module('loanApp'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should call remove with value when callRemove is invoked', function () {
        // Here we are passing actual bindings to the component
        var removeSpy = jasmine.createSpy('remove');
        var bindings = { value: 'foo', remove: removeSpy };
        var cardCmpCtrl = $componentController('cardCmp', null, bindings);

        cardCmpCtrl.callRemove();
        expect(removeSpy).toHaveBeenCalledWith({value:'foo'})
    });
})