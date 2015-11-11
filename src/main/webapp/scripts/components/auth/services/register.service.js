'use strict';

angular.module('aHschedulerApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


