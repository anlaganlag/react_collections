const path = require("path");
const HMTLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",

  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",

        exclude: /node-modules/,
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HMTLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  
  resolve: {
    extensions: [".ts", ".js"],
  },
};
