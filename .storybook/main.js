module.exports = {
  stories: [
    "../README.md"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  refs: {
    html: {
      title: "HTML",
      url: "http://localhost:8080",
    },
    react: {
      title: "React",
      url: "http://localhost:8081",
    },
    vue: {
      title: "Vue",
      url: "http://localhost:8082",
    },
    svelte: {
      title: "Svelte",
      url: "http://localhost:8083",
    },
  },
};
