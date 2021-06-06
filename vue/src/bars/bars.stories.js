import Bars from "./bars.vue";

export default {
  title: "Bars",
  component: Bars,
  argTypes: {
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { Bars },
  setup() {
    return { args };
  },
  template: '<bars v-bind="args" />',
});

export const bars = Template.bind({});
bars.args = {
  color: "inherit",
  size: "inherit",
};
