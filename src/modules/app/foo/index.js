'use strict';

module.exports =
  angular.module('tms_frontend.foo', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('foo', {
      url: '',
      templateUrl: 'app/foo/layout.html',
      controller: 'fooController'
    });
  })
  .controller('fooController', require('./fooController'));
