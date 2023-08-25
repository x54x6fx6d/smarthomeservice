<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Smart Home Service</h1>
	<div class="leds">
		<label class="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" value="" class="sr-only peer">
			<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
			<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-800">Bett Lampe</span>
  		</label>
		<label class="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" value="" class="sr-only peer">
			<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
			<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-800">Bett LED Streifen</span>
  		</label>
  	</div>
</section>

<style>
	* {
		--color-bg-0: rgb(202, 216, 228);
		--color-bg-1: hsl(209, 36%, 86%);
		--color-bg-2: hsl(224, 44%, 95%);
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		gap: 30px;
	}

	h1 {
		width: 100%;
	}

	.leds {
		display: flex;
		flex-direction: column;
		gap: 20px;
		border: 0px solid;
		border-radius: 10px;
		padding: 40px;
		background-image: radial-gradient(
			50% 50% at 50% 50%,
			rgba(255, 255, 255, 0.75) 0%,
			rgba(255, 255, 255, 0) 100%
		),
		linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
	}
</style>
