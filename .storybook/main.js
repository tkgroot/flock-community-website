const path = require("path")

module.exports = {
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-docs/register",
    "@storybook/addon-knobs/register",
  ],
  stories: ["../src/**/*.stories.[tj]s"],
  webpackFinal: async (config, {configType}) => {
     config.module.rules.push({
       test: /\.s?[ac]ss$/,
       use: ["style-loader", "css-loader", "sass-loader"],
       include: path.resolve(__dirname, "../"),
     })

    return config
  },
}
