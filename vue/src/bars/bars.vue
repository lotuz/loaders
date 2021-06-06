<template>
  <span 
    :class="`loader loader-bars`" 
    role="progressbar"
    aria-valuemax="1"
    aria-valuemin="0"
    aria-valuenow="0"
    :style="{ '--color': color, '--size': size }"
  >
    <span class="loader-bars_bar_1"></span>
    <span class="loader-bars_bar_2"></span> 
    <span class="loader-bars_bar_3"></span> 
    <span class="loader-bars_bar_4"></span> 
    <span class="loader-bars_bar_5"></span> 
  </span>
</template>

<script>

import '../../../css/bars/bars.css';

export default {
  name: 'bars',

  props: {
    color: {
      type: String,
      default: 'inherit'
    },
    size: {
      type: String,
      default: 'inherit'
    },
  },
}

</script>
