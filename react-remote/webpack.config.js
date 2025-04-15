// const path = require("path")
// const HtmlWebpackPlugin = require("html-webpack-plugin")
// const { ModuleFederationPlugin } = require("webpack").container

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "build"),
//     publicPath: "auto",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "remote",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./Button": "./src/components/Button",
//         "./Header": "./src/components/Header",
//       },
//       shared: {
//         react: {
//           singleton: true,
//           requiredVersion: require("./package.json").dependencies.react,
//         },
//         "react-dom": {
//           singleton: true,
//           requiredVersion: require("./package.json").dependencies["react-dom"],
//         },
//       },
//     }),
//     // new HtmlWebpackPlugin({
//     //   template: "./public/index.html",
//     // }),
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "public/index.html"),
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public"),
//     },
//     port: 3001,
//     hot: true,
//   },
// }



const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./Header": "./src/components/Header",
        "./Hello": "./src/components/Hello",
      },
      shared: {
        react: {
          singleton: true,
          eager: false,
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          eager: false,
          requiredVersion: "^18.2.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3001,
    hot: true,
  },
};