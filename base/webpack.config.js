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
    port: 3000,
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
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
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
      name: "base",
      remotes: {
        components: "components@http://localhost:8000/remoteEntry.js",
        user_info: "user_info@http://localhost:3001/userInfoRemoteEntry.js",
        merchant: "merchant@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        ...deps,
        vue: { singleton: true },
        "vue-router": { singleton: true },
        "element-ui": { singleton: true },
      }
    })
  ]
}