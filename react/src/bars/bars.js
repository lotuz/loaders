import React from "react";

import "../../../css/bars/bars.css";

const Bars = ({ size, color }) => {
  return (
    <span
      className="loader loader-bars"
      role="progressbar"
      aria-valuemax="1"
      aria-valuemin="0"
      aria-valuenow="0"
      style={{
        '--size': size,
        '--color': color
      }}
    >
      <span class="loader-bars_bar_1"></span>
      <span class="loader-bars_bar_2"></span>
      <span class="loader-bars_bar_3"></span>
      <span class="loader-bars_bar_4"></span>
      <span class="loader-bars_bar_5"></span>
    </span>
  );
};

export default Bars;
