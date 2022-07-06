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
    port: 3001,
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
      filename: "userInfoRemoteEntry.js",
      name: "user_info",
      remotes: {
        components: "components@http://localhost:8000/remoteEntry.js"
      },
      exposes: {
        './userRouter': "./src/userRouter.remote.js",
        './Home': "./src/Home.vue"
      },
      shared: {
        ...deps,
        vue: { singleton: true },
        "element-ui": { singleton: true },
      }
    })
  ]
}