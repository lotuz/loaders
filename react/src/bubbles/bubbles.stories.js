import React from "react";
import Bubbles from "./bubbles";

export default {
  title: "Bubbles",
  component: Bubbles,
  argTypes: {
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <Bubbles {...args} />;

export const bubbles = Template.bind({});

bubbles.args = {
  color: "inherit",
  size: "inherit",
  timing: "linear",
  format: "no-border",
};
