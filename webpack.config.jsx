var getConfig = require('chcokr-webpack');

module.exports = getConfig({
  out: 'dist',
  clearBeforeBuild: true,
  output: {
    hash: true
  }
});
