(function(){
    "use strict";
    angular.module('persons.module')
        .controller('PersonsCtrl', PersonsCtrl);

    PersonsCtrl.$inject=['PersonsService'];

    function PersonsCtrl(PersonsService){
        var vm = this;
        vm.persons = [];
        
        
        PersonsService.getAll().then(function(persons){vm.persons = persons});
    }
})();