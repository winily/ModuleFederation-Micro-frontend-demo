const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require('./package.json').dependencies;

module.exports = {
  devtool: false,
  entry: './src/index.js',
  mode: "development",
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new ModuleFederationPlugin({
      filename: "remoteEntry.js",
      name: "components",
      exposes: {
        './micro-tag': "./src/components/micro-tag.js",
      },
      shared: {
        ...deps,
        vue: { singleton: true, eager: true },
        "element-ui": { singleton: true, eager: true },
      }
    })
  ]
}