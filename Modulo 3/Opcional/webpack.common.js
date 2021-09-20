const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const path = require("path");

module.exports = (env) => {
  const envFilePath = env.NODE_ENV ? `.env.${env.NODE_ENV}` : ".env.production";

  return {
    context: path.join(__dirname, "src"),
    resolve: {
      extensions: [".js", ".jsx"],
    },
    entry: "./index.jsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[name].[ext]",
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          include: path.resolve(__dirname, "images"),
          type: "asset/resource",
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new Dotenv({ path: envFilePath }),
    ],
  };
};
