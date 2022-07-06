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
    port: 3002,
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
      name: "merchant",
      remotes: {
        components: "components@http://localhost:8000/remoteEntry.js"
      },
      exposes: {
        './bootstrap': "./src/bootstrap",
        './router': "./src/router.remote.js",
        './Home': "./src/Home.vue",
      },
      shared: {
        ...deps,
        "vue-router": { singleton: true },
        vue: { singleton: true },
        "element-ui": { singleton: true },
      }
    })
  ]
}