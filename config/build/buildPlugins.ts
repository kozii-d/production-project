import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev = true,
  analyze = false,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins: webpack.WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshPlugin({
        overlay: false,
      }) as webpack.WebpackPluginInstance,
    );
  }

  if (analyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
      }),
    );
  }

  return plugins;
}
