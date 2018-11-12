const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src', 'Configuration.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'projectOverviewDeliveryConfiguration.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },

  externals: ['react-dom', 'react'],

};
