import "../../../css/bars/bars.css";

export default {
  title: "Bars",
  argTypes: {
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "text" },
    },
  },
};

export const Bars = ({ color, size }) => `
    <span 
      style="--color: ${color}; --size: ${size}"
      class="loader loader-bars linear" 
      role="progressbar"
      aria-valuemax="1"
      aria-valuemin="0"
      aria-valuenow="0"
    >
      <span class="loader-bars_bar_1"></span>
      <span class="loader-bars_bar_2"></span> 
      <span class="loader-bars_bar_3"></span> 
      <span class="loader-bars_bar_4"></span> 
      <span class="loader-bars_bar_5"></span> 
    </span>
`;

Bars.args = {
  color: "inherit",
  size: "inherit",
};
