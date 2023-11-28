<script lang="ts">
	import { mainH } from '$lib/store';
</script>

<div style="height: {$mainH}px;" class="flex flex-col w-full items-center justify-center">
	<div class="w-1/2 text-white flex flex-col space-y-6 mt-8">
		<h1 class="font-bold text-4xl">Hello - welcome to the party! 🐢</h1>
		<p>
			This is my attempt to learn Next.js while becoming more proficiant with SvelteKit and
			Tailwind.
		</p>
		<p>
			To accomplish this, I am following
			<a
				class="text-svelte-orange"
				href="https://scrimba.com/"
				target="_blank"
				aria-label="Link to Scrimba's website"
			>
				Scrimba's
			</a>
			beginner React course, but implementing the exercises (or, rough approximations of the exercises)
			in Next.js. Simultaniously, I will implement similar code in SvelteKit. The only difference will
			likely be some thematic styling. When both exercises are complete, I will place a link on the page
			to the corresponding implementation.
		</p>
		<p>
			Even <a
				class="text-react-blue"
				href="https://neon-halva-1de55e.netlify.app/info"
				target="_blank"
				aria-label="link to Next js version">this page</a
			> will be mirrored!
		</p>
	</div>
</div>
