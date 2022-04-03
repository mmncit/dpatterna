const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
  const extensions = [".mjs", ".js", ".ts", ".svelte"];
  const mainFields = ["svelte", "browser", "module", "main"];

  const { mode = "development" } = argv;
  const prod = mode === "production";

  const config = {
    entry: {
      bundle: ["./src/main.ts"],
    },
    resolve: {
      alias: {
        svelte: path.resolve("node_modules", "svelte"),
      },
      extensions,
      mainFields,
      plugins: [new TsconfigPathsPlugin({ extensions, mainFields })],
    },
    output: {
      path: path.resolve(__dirname, "public", "build"),
      filename: "[name].js",
      chunkFilename: "[name].[id].js",
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: "svelte-loader",
            options: {
              emitCss: true,
              hotReload: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            /**
             * MiniCssExtractPlugin doesn't support HMR.
             * For developing, use 'style-loader' instead.
             * */
            prod ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          // use: 'ts-loader',
          // exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: { transpileOnly: true },
            },
          ],
        },
      ],
    },
    mode,
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
    devtool: prod ? false : "source-map",
    devServer: {
      writeToDisk: true,
      port: 9000,
    },
  };
  return config;
};
