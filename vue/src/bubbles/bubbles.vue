<template>
  <span 
    :class="`loader loader-bubbles`" 
    role="progressbar"
    aria-valuemax="1"
    aria-valuemin="0"
    aria-valuenow="0"
    :style="{ '--color': color, '--size': size}"
  >
    <span class="loader-bubble_1"></span>
    <span class="loader-bubble_2"></span> 
    <span class="loader-bubble_3"></span> 
  </span>
</template>

<script>

import '../../../css/bubbles/bubbles.css';

export default {
  name: 'bubbles',

  props: {
    color: {
      type: String,
      default: 'inherit'
    },
    size: {
      type: String,
      default: 'inherit'
    }
  },
}

</script>
