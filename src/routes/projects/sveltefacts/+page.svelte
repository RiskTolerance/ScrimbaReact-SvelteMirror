<script lang="ts">
	import logo from '$lib/assets/svelte.svg';
	import Mirror from '$lib/components/Mirror.svelte';
	import { mainH } from '$lib/store';
</script>

<Mirror url="https://neon-halva-1de55e.netlify.app/projects/reactfacts" />
<div style="height: {$mainH}px;" class="w-full flex justify-center items-center text-white">
	<div
		class="w-1/2 min-w-[550px] max-w-[770px] flex relative flex-col overflow-clip rounded-lg shadow-2xl"
	>
		<div
			class="flex p-8 justify-between items-center h-1/6 bg-neutral-950 border-b-4 border-sopd border-svelte-orange"
		>
			<div class="flex items-center space-x-3 text-2xl font-bold">
				<div class="h-14 w-14">
					<img src={logo} alt="Svelte Logo" />
				</div>
				<h1>SvelteFacts</h1>
			</div>
			<h3 class="text-lg">React Course - Project 1</h3>
		</div>
		<div class="flex justify-start h-5/6 bg-neutral-900">
			<div class="flex flex-col pt-8 pb-20 px-8 space-y-8 z-20">
				<div class="w-full text-3xl font-bold">
					<h1>Fun Facts About Svelte</h1>
				</div>
				<div class="ml-8">
					<div class="flex">
						<div class="text-xl text-svelte-orange -translate-y-1">●&nbsp;</div>
						<div>Was first released in 2016</div>
					</div>
					<div class="flex">
						<div class="text-xl text-svelte-orange -translate-y-1">●&nbsp;</div>
						<div>Was originally created by Rich Harris</div>
					</div>
					<div class="flex">
						<div class="text-xl text-svelte-orange -translate-y-1">●&nbsp;</div>
						<div>Has well over 10K stars on GitHub</div>
					</div>
					<div class="flex">
						<div class="text-xl text-svelte-orange -translate-y-1">●&nbsp;</div>
						<div>Is maintained by the community</div>
					</div>
					<div class="flex">
						<div class="text-xl text-svelte-orange -translate-y-1">●&nbsp;</div>
						<div>Svelte is noted for its simplicity and performance efficiency</div>
					</div>
				</div>
			</div>
		</div>
		<div class="absolute right-[-25px] bottom-12 saturate-50 opacity-5">
			<div class="w-52">
				<img src={logo} alt="Svelte Logo" />
			</div>
		</div>
	</div>
</div>
