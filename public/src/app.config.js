'use strict';
/**
 * @ngdoc overview
 * @name snBulkCurator
 * @description
 * # snBulkCurator
 *
 * Main module of the application.
 */
 angular.module('snBulkCurator')
 .config([
  '$stateProvider',
  '$urlRouterProvider',
  '$ocLazyLoadProvider',
  function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider)
  {
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/twitter');

    $stateProvider
    .state('twitter', {
      url:'/twitter',
      templateUrl: 'src/pages/twitter/twitter.html',
      controller: 'TwitterCtrl'
    })

    $stateProvider
    .state('facebook', {
      url:'/facebook',
      templateUrl: 'src/pages/facebook/facebook.html',
      controller: 'FacebookCtrl'
    })

  }]);


