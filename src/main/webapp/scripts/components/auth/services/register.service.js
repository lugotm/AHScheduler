'use strict';

angular.module('ahschedulerApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


