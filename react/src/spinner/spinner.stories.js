import React from "react";
import Spinner from "./spinner";

export default {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "text" },
    },
    timing: {
      options: ["linear", "bezier"],
      control: { type: "select" },
    },
    format: {
      options: ["no-border", "border"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Spinner {...args} />;

export const spinner = Template.bind({});

spinner.args = {
  color: "inherit",
  size: "inherit",
  timing: "linear",
  format: "no-border",
};
