<script lang="ts">
	import { mainH } from '$lib/store';
</script>

<div style="height: {$mainH}px;" class="flex flex-col w-full items-center justify-center">
	<div class="w-1/4 text-white flex flex-col space-y-6 mt-8">
		<h1>This is a list of links to the projects I have completed or am currently working on:</h1>
		<ul class="text-xl">
			<li class="flex space-x-1">
				<a class="text-svelte-orange" href="/projects/sveltefacts">Svelte Facts</a>
				<a class="text-react-blue" href="https://neon-halva-1de55e.netlify.app/projects/reactfacts"
					>(Next Version)</a
				>
			</li>
		</ul>
	</div>
</div>
