(function(){
    "use strict";
    angular.module('loanApp.common')
        .component('cardCmp',  {
                controller : CardCmpCtrl,
                templateUrl : 'scripts/common/common.card.component.html',
                transclude : true,
                bindings:{
                    title:'@',
                    value:'=',
                    backgroundColor : '@',
                    remove:'&?'
                }
            });
     CardCmpCtrl.$inject=[]
     function CardCmpCtrl(){
        var vm = this;
        vm.getColor = getColor;
        vm.callRemove = callRemove;

        function getColor(){
            return vm.backgroundColor
        }
        function callRemove(){
            vm.remove({'value':vm.value})
        }
     }
})();