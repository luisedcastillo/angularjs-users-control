(function(){
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController(){
        // Do something
        //test = "hola mundo";
        var vm = this;
        vm.test = "hola mundo";
    }

  

})();