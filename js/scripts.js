'use strict';

var app = angular.module('myApp', [])

app.controller('UserController', function ($scope, $http, $window) {
    $scope.userArr = [];

    for (var i = 0; i < 30; i++) {
        $http.get("https://randomuser.me/api/?results=1&nat=US")
        .then(function (response) {
            $scope.related = response.data;
            var theSrchResults = response.data.results;

            $scope.userArr.push({
                id: $scope.related.info.seed,
                fname: theSrchResults[0].name.first,
                lname: theSrchResults[0].name.last,
                streetNum: theSrchResults[0].location.street.number,
                streetAdd: theSrchResults[0].location.street.name,
                city: theSrchResults[0].location.city,
                state: theSrchResults[0].location.state,
                zip: theSrchResults[0].location.postcode,
                email: theSrchResults[0].email,
                image: theSrchResults[0].picture.medium
            })

            $scope.userResults = $scope.userArr;
        });
    }
});