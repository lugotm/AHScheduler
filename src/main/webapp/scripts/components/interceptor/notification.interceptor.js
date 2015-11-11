 'use strict';

angular.module('aHschedulerApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-aHschedulerApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-aHschedulerApp-params')});
                }
                return response;
            }
        };
    });
