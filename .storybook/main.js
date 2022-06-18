/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  stories: ["../src/components/**/stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);

    config.resolve.alias["next/image"] = require.resolve("./NextImage.js");

    return config;
  }
};
