(function(){
    "use strict";
    angular.module('persons.module')
        .service('PersonsService', PersonsService);

    PersonsService.$inject=['$http', '$q'];

    function PersonsService($http, $q){
        this.getAll = getAll;

        function getAll(){
            return $q(function(resolve, reject){
                $http.get('http://localhost:3000/persons').then(
                    function(result){ resolve(result.data)}
                )
            })
        }
    }

})();