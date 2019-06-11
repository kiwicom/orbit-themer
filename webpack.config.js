const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {

  return {
    entry: {
      bundle: './src/index.js',
    },

    performance: {
      hints: false,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
      ]
    },

    resolve: {
      extensions: ['.js']
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        hash: true,
      })
    ],
  }
};