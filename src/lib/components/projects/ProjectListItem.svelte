<script lang="ts">
	export let name = '';
	export let localUrl = '';
	export let externalUrl = '';
</script>

<li
	class="flex flex-col sm:flex-row bg-neutral-950 p-5 rounded-md items-center justify-center sm:justify-between"
>
	<div class="flex justify-center sm:justify-start mb-2 sm:mb-0">
		<a class="text-svelte-orange" href={localUrl}>{name} (complete)</a>
	</div>
	<div class="flex justify-center sm:justify-end">
		<a class="text-react-blue" href={externalUrl}>Next Version</a>
	</div>
</li>
