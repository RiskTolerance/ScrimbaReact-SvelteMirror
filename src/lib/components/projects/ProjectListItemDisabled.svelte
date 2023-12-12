<script lang="ts">
	export let name = '';
</script>

<li
	class="flex flex-col sm:flex-row bg-neutral-950 p-5 rounded-md items-center justify-center sm:justify-between"
>
	<div class="flex justify-center sm:justify-start mb-2 sm:mb-0 opacity-25">
		<p class="text-svelte-orange">{name} (WIP)</p>
	</div>
	<div class="flex justify-center sm:justify-end opacity-25">
		<p class="text-react-blue">Next Version</p>
	</div>
</li>
