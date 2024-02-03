const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  const rules = [
    {
      test: /\.tsx?$/i,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },
    {
      test: /\.(c|s[ac])ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ],
    },
  ];

  const plugins = [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ];

  let config = {
    entry: "./src/index.tsx",
    module: { rules },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    target: ["web", "es5"],
    output: {
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins,
  };

  if (isDev) {
    console.log("Building for development");

    config = {
      ...config,
      devServer: {
        historyApiFallback: true,
        port: 3000,
      },
      devtool: "inline-source-map",
    };
  }
  else {
    console.log("Building for production");
  }

  return config;
};
