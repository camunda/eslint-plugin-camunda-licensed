const path = require('path');

module.exports = {
  plugins: [
    'license-header'
  ],
  rules: {
    'license-header/header': [2, path.join(__dirname, '/../resources/apache-license-header.js') ]
  }
};