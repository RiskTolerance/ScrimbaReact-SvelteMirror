<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="w-full flex justify-end py-3 px-6 bg-neutral-950 text-white font-semibold">
	<ul class="flex space-x-5">
		<li>
			<a
				style={$page.url.pathname === '/' ? 'color: #f96743' : ''}
				class="hover:text-svelte-orange"
				href="/">Home</a
			>
		</li>
		<li>
			<a
				style={$page.url.pathname === '/projects' ? 'color: #f96743' : ''}
				class="hover:text-svelte-orange"
				href="/projects">Projects</a
			>
		</li>
		<li>
			<a
				style={$page.url.pathname === '/info' ? 'color: #f96743' : ''}
				class="hover:text-svelte-orange"
				href="/info">Info</a
			>
		</li>
	</ul>
</nav>
