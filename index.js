'use strict';

var mit = require('./configs/mit');
var commercial = require('./configs/commercial');
var apache = require('./configs/apache');

module.exports = {
  configs: {
    mit,
    MIT: mit,
    commercial,
    apache
  }
};
