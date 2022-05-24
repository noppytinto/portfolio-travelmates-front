module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",

    'storybook-addon-paddings',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  paddings: {
    values: [
      { name: 'Small', value: '16px' },
      { name: 'Medium', value: '32px' },
      { name: 'Large', value: '82px' },
    ],
    default: 'Large',
  },
}
