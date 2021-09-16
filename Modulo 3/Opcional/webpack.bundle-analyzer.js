const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const dev = require("./webpack.dev");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const baseConfig = merge(common, dev);

module.exports = merge(common, {
  plugins: [new BundleAnalyzerPlugin()],
});
