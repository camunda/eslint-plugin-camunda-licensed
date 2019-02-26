'use strict';

var mit = require('./configs/mit');
var camunda = require('./configs/camunda');

module.exports = {
  configs: {
    mit,
    MIT: mit,
    camunda,
    CAMUNDA: camunda
  }
};
