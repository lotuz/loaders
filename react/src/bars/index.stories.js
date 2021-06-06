import React from "react";
import { Bars as Component } from "./index";

export default {
  title: "Bars",
  component: Component,
  argTypes: {
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Bars = Template.bind({});

Bars.args = {
  color: "inherit",
  size: "inherit",
};
