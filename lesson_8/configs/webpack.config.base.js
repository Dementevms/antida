const path = require('path');
const WebpackBar = require('webpackbar');

const configureBabelLoader = () => ({
  test: /\.(jsx?)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
});

const configureOutput = () => {
  return {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
  };
};

const baseConfig = {
  entry: {
    main: path.resolve(__dirname, '../src/main'),
  },
  output: configureOutput(),
  module: {
    rules: [
      configureBabelLoader(),
    ]
  },
  plugins: [
    new WebpackBar({
      name: 'Antida',
      profile: false
    }),
  ]
};

module.exports.config = baseConfig;