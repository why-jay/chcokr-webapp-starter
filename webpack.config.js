// hjs-webpack prepares a lot of the webpack config boilerplate for us!
var config = require('hjs-webpack')({
  in: 'src/entry_point_do_not_touch.jsx',
  out: 'dist',
  clearBeforeBuild: true,
  output: {
    hash: true
  },

  // If the hostname is not '0.0.0.0' but is something like 'localhost', when
  // webpack is run inside a guest VM, the webpack-dev-server is not accessible
  // from host machine.
  hostname: '0.0.0.0',

  // Make sure this port number matches the ports specified in the Vagrantfile.
  port: 23971
});

// But hjs-webpack doesn't take care of everything, so we do a little more
// below.

// Bootstrap includes a woff2 file, but hjs-webpack doesn't have url-loader set
// up for woff2 files.
config.module.loaders.push({
  test: /\.woff2$/,
  loader: 'url?limit=10000'
});

// Let's set up some linting!
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

// This is where you set options to pass into babel-loader.
config.module.loaders[0].loaders[1] = 'babel?' +
  'presets[]=es2015' +
  '&plugins[]=transform-react-jsx';

module.exports = config;
