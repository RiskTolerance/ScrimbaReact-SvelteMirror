<script lang="ts">
	export let name = '';
	export let localUrl = '';
	export let externalUrl = '';
</script>

<li class="flex space-x-1 bg-neutral-950 p-5 rounded-md justify-between">
	<div class="flex justify-start">
		<a class="text-svelte-orange" href={localUrl}>{name} (complete)</a>
	</div>
	<div class="w-1/3 flex justify-end">
		<a class="text-react-blue" href={externalUrl}>Next Version</a>
	</div>
</li>
