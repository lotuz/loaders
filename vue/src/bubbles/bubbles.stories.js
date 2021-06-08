import Bubbles from "./bubbles.vue";

export default {
  title: "Bubbles",
  component: Bubbles,
  argTypes: {
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "text" },
    }
  },
};

const Template = (args) => ({
  components: { Bubbles },
  setup() {
    return { args };
  },
  template: '<bubbles v-bind="args" />',
});

export const bubbles = Template.bind({});
bubbles.args = {
  color: "inherit",
  size: "inherit"
};
