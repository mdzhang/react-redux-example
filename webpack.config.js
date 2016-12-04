const path = require('path');
const webpack = require('webpack');

const dir = path.resolve('.');
const src = path.join(dir, 'src');

const config = {
  entry: [
    // main app entry point
    './src/index',
    'webpack-hot-middleware/client',
  ],

  // output compiled bundle into dist/bundle.js
  output: {
    path: path.join(dir, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    // see webpack-hot-middleware
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

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
