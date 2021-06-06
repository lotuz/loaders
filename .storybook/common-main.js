module.exports = (type) => ({
  features: {
    buildStoriesJson: true
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    ...(type === "svelte" ? ["@storybook/addon-svelte-csf"] : []),
  ],
});
