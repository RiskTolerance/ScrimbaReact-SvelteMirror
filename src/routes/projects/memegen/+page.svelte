<script lang="ts">
	import Mirror from '$lib/components/Mirror.svelte';
	import { mainH } from '$lib/store';
	import { memeState } from '$lib/store';
	import type { MemeData } from '$lib/types';

	interface PageData {
		memes: MemeData;
	}
	export let data: PageData;
	const updateMeme = () => {
		const getRandomInt = (max: number) => {
			return Math.floor(Math.random() * max);
		};
		const memeTotal = data.memes.length;
		const memeSelect = data.memes[getRandomInt(memeTotal)];
		memeState.update((prev) => {
			return { ...prev, ...memeSelect };
		});
	};

	const updateText = (e: Event) => {
		const val = (e.target as HTMLInputElement).value;
		(e.target as HTMLInputElement).name === 'topText'
			? memeState.update((prev) => {
					return { ...prev, top_text: val };
			  })
			: memeState.update((prev) => {
					return { ...prev, bottom_text: val };
			  });
	};
</script>

<Mirror url="https://next-sveltekit-mirror.netlify.app/projects/memegen" />
<div
	style="min-height: {$mainH}px"
	class="w-full h-full flex flex-col justify-center items-center py-10"
>
	<div class="w-[600px] bg-slate-50 rounded-lg overflow-clip text-slate-50">
		<div
			class="w-full h-24 flex items-center justify-between px-10 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 shadow-md"
		>
			<h1 class="text-2xl font-bold">Meme Generator ✨</h1>
			<p class="text-lg font-semibold italic">React Course - Project 3</p>
		</div>
		<div class="flex flex-col">
			<div class="flex items-center justify-around p-4 space-x-4 text-purple-950">
				<input
					name="topText"
					on:input={updateText}
					class="ring-2 ring-purple-400 focus:ring-purple-950 shadow-md shadow-purple-400 placeholder-purple-400 rounded-md px-3 py-2 w-1/2"
					type="text"
					placeholder={$memeState.top_text}
				/>
				<input
					name="bottomText"
					on:input={updateText}
					class="ring-2 ring-purple-400 focus:ring-purple-950 shadow-md shadow-purple-400 placeholder-purple-400 rounded-md px-3 py-2 w-1/2"
					type="text"
					placeholder={$memeState.bottom_text}
				/>
			</div>
			<div class="flex items-center justify-center px-4">
				<button
					on:click={updateMeme}
					class="w-full rounded-md px-3 py-2 hover:scale-[1.01] text-slate-50 font-semibold transition-all duration-200 hover:bg-gradient-to-tr hover:text-pink-100 bg-gradient-to-tl from-gray-900 via-purple-900 to-violet-600"
				>
					Get New Meme Image
				</button>
			</div>
			<div
				class="flex items-center justify-center aspect-square m-4 relative rounded-md overflow-clip text-white text-3xl font-black"
			>
				<p
					style="text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000"
					class="absolute w-full text-center top-0 z-10 h-1/2 l mt-4 select-none"
				>
					{$memeState.top_text}
				</p>
				<img
					class="bg-fuchsia-300 max-h-full w-full object-fill rounded-md"
					width=""
					height=""
					src={$memeState.url}
					alt="something"
				/>
				<p
					style="text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000"
					class="absolute w-full text-center bottom-0 max-h-1/2 mb-4 select-none"
				>
					{$memeState.bottom_text}
				</p>
			</div>
		</div>
	</div>
</div>
