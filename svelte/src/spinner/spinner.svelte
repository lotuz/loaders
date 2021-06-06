<script>
	import '../../../css/spinner/spinner.css';

	export let color = '';
	export let size = '';
	export let timing = "linear"
	export let format = "no-border"
</script>

<span 
	class="loader loader-spinner {timing} {format}" 
	style="--color: {color}; --size: {size}"
	role="progressbar"
	aria-valuemax="1"
	aria-valuemin="0"
	aria-valuenow="0"
>
	<span class="loader-spinner_background"></span>
	<span class="loader-spinner_spinner"></span>
</span>

