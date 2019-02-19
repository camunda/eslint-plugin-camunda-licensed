const path = require('path');

module.exports = {
  plugins: [
    'header'
  ],
  rules: {
    'header/header': [2, path.join(__dirname, '/../resources/MIT-license-header.js') ]
  }
};