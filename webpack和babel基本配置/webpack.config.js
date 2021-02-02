const path = require("path");
const HMTLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // mode: "development",

  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment:{
      arrowFunction:false
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      "chrome": "58",
                      "ie":"11"
                    },
                    "corejs": "3",
                    "useBuiltIns": "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
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
