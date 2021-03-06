const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});

module.exports = {
  entry: ['./src/index.js', './src/scss/main.scss', './src/utils/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['env', 'react', 'stage-2'],
        plugins: ['transform-decorators-legacy']
      }
    }, {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    },
    {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      }),
    }, {
      test: /\.css?/,
      loader: ['style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    }, ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, './'), 'index.html'),
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  node: {
    fs: 'empty'
  }
};
