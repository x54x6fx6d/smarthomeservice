<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h1>Settings</h1>
	<a class="p-2 bg-blue-500 text-white rounded-md" href="/settings/env">Edit .env</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		gap: 20px;
	}

	h1 {
		width: 100%;
	}
</style>
