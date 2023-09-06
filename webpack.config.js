const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        "common": "common@http://127.0.0.1/pilot/common/remoteEntry.js",
        "nextjscomponents": "nextjscomponents@http://127.0.0.1/_next/static/remoteEntry.js",
        // "nextjscomponents": "nextjscomponents@http://127.0.0.1:3007/_next/pages/board-list.js",
        // "nextjscomponents": `promise new Promise(res=>{
        //   getRemoteVersionForHost('consumer', 'nextjscomponents').then(('http://127.0.0.1:3007/_next/static/remoteEntry.js')=>{
        //     injectRemoteScript('http://127.0.0.1:3007/_next/static/remoteEntry.js').then()=>{
              
        //     }
        //   })
        // })`
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: true // false로 하면 React.laze()를 통해서만 참조할 수 있음
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
