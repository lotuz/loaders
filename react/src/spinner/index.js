import React from 'react';

import '../../../css/spinner/spinner.css';

export const Spinner = ({size, color, timing="linear", format="no-border"}) => {
  return (
    <span
      className={`loader loader-spinner ${timing} ${format}`} 
      style={{
        '--size': size,
        '--color': color
      }}
    >
        <span className="loader-spinner_background"></span>
        <span className="loader-spinner_spinner"></span>
    </span>
  )
};

