<script lang="ts">
        import type {PageData} from "./$types";
        export let data: PageData;    

        
    
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h1>Edit .env</h1>
    <h5 class="text-center font-mono">LOGGING_WEBHOOK: {data.logging_webhook}</h5>
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

    h3 {
        width: 100%;
    }
</style>
