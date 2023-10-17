const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    alias: {
      '@azure/identity': path.resolve(__dirname, 'node_modules/@azure/identity/dist/index.js'),
      '@azure/keyvault-secrets': path.resolve(__dirname, 'node_modules/@azure/keyvault-secrets/dist/index.js')
    },
    fallback: { 
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer/"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/"),
      "crypto": require.resolve("crypto-browserify"),
      // Use empty shims for modules that are not needed or have browser alternatives
      "child_process": false,
      "fs": false,
      "stream": require.resolve("stream-browserify"),
      "url": require.resolve("url/"),
      "os": require.resolve("os-browserify"),
      "http": require.resolve("stream-http")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};
