<script lang="ts">
	import { mainH } from '$lib/store';
	export let name = '';
	export let localUrl = '';
	export let externalUrl = '';
</script>

<li class="flex space-x-1">
	<a class="text-svelte-orange" href={localUrl}>{name}</a>
	<a class="text-react-blue" href={externalUrl}>(Next Version)</a>
</li>
