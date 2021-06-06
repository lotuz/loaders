<template>
  <span 
    :class="`loader loader-spinner ${timing} ${format}`" 
    role="progressbar"
    aria-valuemax="1"
    aria-valuemin="0"
    aria-valuenow="0"
    :style="{ '--color': color, '--size': size}"
  >
    <span class="loader-spinner_background"></span>
    <span class="loader-spinner_spinner"></span>
  </span>
</template>

<script>

import '../../../css/spinner/spinner.css';

export default {
  name: 'spinner',

  props: {
    color: {
      type: String,
      default: 'inherit'
    },
    size: {
      type: String,
      default: 'inherit'
    },
    timing: {
      type: String,
      default: 'linear'
    },
    format: {
      type: String,
      default: 'no-border'
    }
  },
}

</script>
