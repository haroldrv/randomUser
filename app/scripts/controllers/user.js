(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name mytodoApp.controller:UserCtrl
     * @description
     * # UserCtrl
     * Controller of the mytodoApp
     */
    angular
        .module('mytodoApp')
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$http', 'apiService'];

    function UserCtrl($http, apiService) {
        var vm = this;
        vm.inProgress = false;
        vm.user = [];
        vm.getRandomUser = getRandomUser;
        
        initialize();
        
        function initialize(){
            getRandomUser();
        }
        
        function getRandomUser(){
            var url = 'https://randomuser.me/api/';
            vm.inProgress = true;
            apiService.getRandomUser(url)
                .then(bindResult)
                .catch(logError);
        }
        
        function bindResult(response){
            vm.inProgress = false;
            vm.user = response.data.result[0].user;
        }
        
        function logError(error){
            vm.inProgress = false;
            console.log(error);
        }
    }
})();