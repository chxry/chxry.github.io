<script>
	export let src;
	export let href = undefined;
	export let alt = href;
</script>

{#if href}
	<a {href}><img class="btn" {src} {alt}></a>
{:else}
	<img class="btn" {src} {alt}>
{/if}
