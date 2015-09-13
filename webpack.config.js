var ExtractStilrPlugin = require('extract-stilr-webpack-plugin');
var getConfig = require('hjs-webpack');

var config = getConfig({
  in: 'src/index.jsx',
  out: 'dist',
  clearBeforeBuild: true,
  output: {
    hash: true
  }
});

if (!config.spec.isDev) {
  config.output.libraryTarget = 'umd';
  config.plugins.push(new ExtractStilrPlugin());
}

module.exports = config;
