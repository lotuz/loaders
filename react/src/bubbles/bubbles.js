import React from 'react';
import '../../../css/bubbles/bubbles.css';

const Bubbles = ({size, color}) => {
  return (
    <span
      className={`loader loader-bubbles`} 
      style={{
        '--size': size,
        '--color': color
      }}
    >
      <span class="loader-bubble_1"></span>
      <span class="loader-bubble_2"></span> 
      <span class="loader-bubble_3"></span> 
    </span>
  )
};

export default Bubbles;
