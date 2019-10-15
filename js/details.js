'use strict';

var app = angular.module('myApp', [])

app.controller("UserDetailsController", function($scope, $http, $location) {
    var userId = $location.absUrl().split('?id=').pop();

    $http.get("https://randomuser.me/api/?nat=US&seed=" + userId)
            .then(function (response) {
                $scope.related = response.data.results;
                $scope.userDetailResults = $scope.related;
                $scope.userDetailResults[0].dob.date = moment($scope.userDetailResults[0].dob.date).format("YYYY-MM-DD hh:mm:ss");
            });

});
