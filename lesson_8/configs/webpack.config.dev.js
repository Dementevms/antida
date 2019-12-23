const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base').config;

const configureDevTool = () => '#cheap-module-eval-source-map';

const devConfig = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: configureDevTool(),
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    compress: true,
    port: 9000
  },
  optimization: {
    minimize: false
  }
});

module.exports = devConfig;