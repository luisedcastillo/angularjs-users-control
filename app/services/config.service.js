(function(){
    'use strict';

    angular
        .module('services')
        .factory('configService', configService);

    configService.$inject = [$q, $http];

    function configService($q, $http){
        var service = {
            config: {},
            load: load
        };

        return service;

        ///////////////////

        function load(){
            var defer = $q.defer();

            $http.get('config.json')
                .then(function success(data){
                    service.config = data;
                    defer.resolve();
                },
                function error(error){
                    defer.reject(error);
                });

            return defer;
        }
    }
})();