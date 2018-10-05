(function(){
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['configService'];
    
    function AppController(configService){
        // Do something
        //test = "hola mundo";
        var vm = this;
        vm.config = {};
        vm.test = "hola mundo";
        
        configService
            .load()
            .then(function success(){
                vm.config = configService.config;
            });

    }

  

})();