(function(){
    "use strict";
    angular.module('about.module')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject=[];

    function AboutCtrl() {
        var vm = this;
        vm.technology='AngularJS'
    }
})();