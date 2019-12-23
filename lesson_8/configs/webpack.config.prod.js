const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const configureDevTool = () => '#source-map';

const configureOptimization = () => {
  const minimizer = [
    new UglifyJsPlugin(),
  ];

  return {
    minimizer
  };
};

const prodConfig = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: configureDevTool(),
  optimization: configureOptimization(),
});

module.exports = prodConfig;