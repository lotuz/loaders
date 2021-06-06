<script>
	import '../../../css/bars/bars.css';

	export let color = '';
	export let size = '';
</script>

<span 
	class="loader loader-bars" 
	style="--color: {color}; --size: {size}"
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

