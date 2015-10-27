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

// Bootstrap includes a woff2 file, but hjs-webpack doesn't have url-loader set
// up for woff2 files.
config.module.loaders.push({
  test: /\.woff2$/,
  loader: 'url?limit=10000'
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
