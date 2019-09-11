const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/app.js",
  output: {
    filename: "beef-[contentHash].js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', // 2. js -> style tag
          'css-loader' // 1. css -> js
        ]
      }
    ]
  }

}