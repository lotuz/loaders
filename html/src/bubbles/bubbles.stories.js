import "../../../css/bubbles/bubbles.css";

export default {
  title: "Bubbles",
  argTypes: {
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "text" },
    },
  },
};

export const Bubbles = ({ color, size }) => `
<div>
    <span 
      style="--color: ${color}; --size: ${size}"
      class="loader loader-bubbles linear" 
      role="progressbar"
      aria-valuemax="1"
      aria-valuemin="0"
      aria-valuenow="0"
    >
      <span class="loader-bubble_1"></span>
      <span class="loader-bubble_2"></span> 
      <span class="loader-bubble_3"></span> 
    </span>
</div>
`;

Bubbles.args = {
  color: "inherit",
  size: "inherit",
};
