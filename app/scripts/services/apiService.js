'use strict';

var miServicio = angular.module('mytodoApp');

miServicio.service('apiService', apiService);

apiService.$inject = ['$http'];

function apiService($http) {
    var service = {
        getRandomUser: getRandomUser
    };

    return service;

    function getRandomUser(url) {
        return $http.get(url);
    }
}