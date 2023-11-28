<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
	import { mainH } from '$lib/store';

	import { onMount } from 'svelte';

	let navH: number;
	let footH: number;
	let innerHeight: number;

	onMount(() => {
		resize();
	});

	function resize() {
		navH = document.querySelectorAll('nav')[0].offsetHeight;
		footH = document.querySelectorAll('footer')[0].offsetHeight;
		mainH.set(innerHeight - (navH + footH));
	}
</script>

<svelte:window bind:innerHeight on:resize={resize} />

<Nav />
<slot />
<Footer />
