<script>
	import '../../../css/bubbles/bubbles.css';

	export let color = '';
	export let size = '';
</script>

<span 
	class="loader loader-bubbles" 
	style="--color: {color}; --size: {size}"
	role="progressbar"
	aria-valuemax="1"
	aria-valuemin="0"
	aria-valuenow="0"
>
	<span class="loader-bubble_1"></span>
	<span class="loader-bubble_2"></span> 
	<span class="loader-bubble_3"></span> 
</span>

