import React from "react";
import { Spinner as Component } from "./index";

export default {
  title: "Spinner",
  component: Component,
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

const Template = (args) => <Component {...args} />;

export const Spinner = Template.bind({});

Spinner.args = {
  color: "inherit",
  size: "inherit",
  timing: "linear",
  format: "no-border",
};
