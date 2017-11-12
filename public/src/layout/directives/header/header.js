'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('snBulkCurator')
    .directive('header',function(){
        return {
        templateUrl:'src/layout/directives/header/header.html',
        restrict: 'E',
        replace: true,
        }
    });


