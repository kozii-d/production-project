import path from "path";
import webpack from "webpack";

import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  // Использую unshift вместо push для того, чтобы в сторисах изначально пакеты искались в файлах проекта,
  // а уже только после в node_modules. Это нужно из-за того, что в модулях есть папка entities
  config!.resolve!.modules!.unshift(paths.src);
  config!.resolve!.extensions!.push(".ts", ".tsx");
  // eslint-disable-next-line no-param-reassign
  const rules = config.module!.rules as webpack.RuleSetRule[];
  config!.module!.rules = rules.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(""),
    __PROJECT__: JSON.stringify("storybook"),

  }));

  return config;
};
