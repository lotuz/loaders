import "../../../css/spinner/spinner.css";

export default {
  title: "Spinner",
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

export const Spinner = ({ color, size, timing, format}) => `
    <span 
      style="--color: ${color}; --size: ${size}"
      class="loader loader-spinner ${timing} ${format}" 
      role="progressbar"
      aria-valuemax="1"
      aria-valuemin="0"
      aria-valuenow="0"
    >
      <span class="loader-spinner_background"></span>
      <span class="loader-spinner_spinner"></span>
    </span>
`;

Spinner.args = {
  color: "inherit",
  size: "inherit",
  timing: "linear",
  format: "no-border",
};
