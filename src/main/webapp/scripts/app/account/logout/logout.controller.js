'use strict';

angular.module('ahschedulerApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
