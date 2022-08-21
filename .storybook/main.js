const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: { builder: '@storybook/builder-webpack5' },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(j|t)s?(x)'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    });
    config.resolve.plugins = config.resolve.plugins ?? [];
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};