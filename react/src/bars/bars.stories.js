import React from "react";
import Bars from "./bars";

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

const Template = (args) => <Bars {...args} />;

export const bars = Template.bind({});

bars.args = {
  color: "inherit",
  size: "inherit",
};
