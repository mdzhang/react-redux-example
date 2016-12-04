const webpack = require('webpack');

const config = {
  entry: [
    // main app entry point
    './app/main.jsx',
    'webpack-hot-middleware/client',
  ],

  // output compiled bundle into dist/bundle.js
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
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
};

module.exports = config;
