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

config.eslint = {
  configFile: './node_modules/chcokr-eslintrc/.eslintrc'
};
if (!config.module.preLoaders) {
  config.module.preLoaders = [];
}
config.module.preLoaders.push({
  test: /(\.js$)|(\.jsx$)/,
  exclude: /node_modules/,
  loader: 'eslint'
});

if (!config.spec.isDev) {
  config.output.libraryTarget = 'umd';
  config.plugins.push(new ExtractStilrPlugin());
}

module.exports = config;
