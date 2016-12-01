
(function(){
    'use strict';
    angular.module('loanApp', ['ngResource', 'ui.router', 'ngMaterial', 'loanApp.common', 'loan.module','about.module', 'persons.module'])
        .config(stateConfiguration);

    stateConfiguration.$inject=['$stateProvider', '$urlRouterProvider'];

    function stateConfiguration($stateProvider, $urlRouterProvider){
        var states = [
            {
                name: 'about',
                url:'/about',
                controller:'AboutCtrl',
                controllerAs:"aboutCtrl",
                templateUrl : '/scripts/about/about.html'
            },
            {
                name: 'list',
                url:'/list',
                templateUrl:'/scripts/list/list.html'                
            },
            {
                name:'list.loans',
                url:'/loans',
                controller: 'LoansCtrl',
                controllerAs:'loansCtrl',
                templateUrl:'/scripts/loans/loans.html'
            },
            {
                name:'list.persons',
                url:'/persons',
                controller:'PersonsCtrl',
                controllerAs:'personsCtrl',
                templateUrl:'/scripts/persons/persons.html'
            }
        ];

       // Loop over the state definitions and register them
        states.forEach(function(state) {
            $stateProvider.state(state);
        });
        $urlRouterProvider.when('/', '/list')
        $urlRouterProvider.when('', '/list')
        $urlRouterProvider.otherwise('/list');
    }    

})()
