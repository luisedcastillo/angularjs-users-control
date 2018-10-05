(function(){
    'use strict';

    angular
        .module('userControl.services')
        .factory('configService', configService);

    configService.$inject = ['$http', '$q'];

    function configService($http, $q){
        var service = {
            config: {},
            load: load
        };

        return service;

        ///////////////////

        function load(){
            var defer = $q.defer();

            $http.get('config.json')
                .then(function success(response){
                    service.config = response.data;
                    defer.resolve();
                },
                function error(error){
                    defer.reject(error);
                });

            return defer.promise;
        }
    }
})();