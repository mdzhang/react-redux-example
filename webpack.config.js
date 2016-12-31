const path = require('path');
const webpack = require('webpack');

console.log(`NODE_ENV is ${process.env.NODE_ENV}`); // eslint-disable-line no-console

const isDevBuild = process.env.NODE_ENV === 'development';

const dir = path.resolve('.');
const src = path.join(dir, 'src');

const config = {
  entry: [
    // main app entry point
    './src/index',
  ],

  // output compiled bundle into dist/<env>/bundle.js
  output: {
    path: path.join(dir, 'dist', process.env.NODE_ENV),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  module: {
    // each of the following loaders will be applied to files that match the
    // text regex, but not the exclude regex
    loaders: [
      {
        // babel-loader supports transforming both ES2015 and JSX
        // apply to both .js and .jsx files
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // explicitly tell babel what transformations to run
          presets: ['react', 'es2015', 'stage-0'],
        },
        include: src,
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
    root: src,
  },
};

module.exports = config;

if (isDevBuild) {
  config.entry.push('webpack-hot-middleware/client');
  config.plugins = [
    // see webpack-hot-middleware
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ];
}
