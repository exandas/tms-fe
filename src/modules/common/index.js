'use strict';

module.exports =
  angular.module('tms_frontend.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
