<script lang="ts">
	import AirbnbDestinationCard from '$lib/components/airbnb/AirbnbDestinationCard.svelte';
	import AirbnbHeroImageSingle from '$lib/components/airbnb/AirbnbHeroImageSingle.svelte';
	import AirbnbHeroImageDouble from '$lib/components/airbnb/AirbnbHeroImageDouble.svelte';
	import logo from '$lib/assets/airbnb.svg';
	import img1 from '$lib/assets/images/airbnb/hero/1.jpg';
	import img2 from '$lib/assets/images/airbnb/hero/2.jpg';
	import img3 from '$lib/assets/images/airbnb/hero/3.jpg';
	import img4 from '$lib/assets/images/airbnb/hero/4.jpg';
	import img5 from '$lib/assets/images/airbnb/hero/5.jpg';
	import img6 from '$lib/assets/images/airbnb/hero/6.jpg';
	import img8 from '$lib/assets/images/airbnb/hero/8.jpg';
	import img9 from '$lib/assets/images/airbnb/hero/9.jpg';
	import aus from '$lib/assets/images/airbnb/cards/roo.jpg';
	import nyc from '$lib/assets/images/airbnb/cards/nyc.jpg';
	import jp from '$lib/assets/images/airbnb/cards/weeb.jpg';
	import Mirror from '$lib/components/Mirror.svelte';
	import VanillaTilt from 'vanilla-tilt';
	import { onMount } from 'svelte';

	import type { cardData } from '$lib/types';

	const cardData: cardData = [
		{
			status: 'sold out',
			rating: 4,
			numberOfRatings: 33,
			city: 'Sydney',
			country: 'Australia',
			descriptionShort: 'Crikey, mate, ya lookin to get rekt?',
			price: '12',
			imgUrl: aus
		},
		{
			status: 'online',
			rating: 3,
			numberOfRatings: 17,
			city: 'New York City',
			country: 'USA',
			descriptionShort: "It's just a really big apple...",
			price: '13000',
			imgUrl: nyc
		},
		{
			status: 'online',
			rating: 5,
			numberOfRatings: 65,
			city: 'Tokyo',
			country: 'Japan',
			descriptionShort: 'Buncha weebs.',
			price: '1234',
			imgUrl: jp
		}
	];

	onMount(() => {
		const tiltElements = document.getElementsByClassName('tilt');
		if (tiltElements.length > 0) {
			for (let i = 0; i <= tiltElements.length; i++) {
				VanillaTilt.init(tiltElements[i] as HTMLElement);
			}
		}
	});
</script>

<Mirror url="https://www.google.com" />
<div class="w-full my-12 flex justify-center items-center">
	<div
		class="w-1/2 min-w-[550px] max-w-[770px] flex relative flex-col overflow-clip rounded-lg shadow-2xl bg-white"
	>
		<!-- header -->
		<div class="flex px-10 w-full shadow-lg">
			<img class="w-44" src={logo} alt="airbnb logo" />
		</div>
		<!-- hero images -->
		<div class="w-full h-96 p-10 flex space-x-4">
			<AirbnbHeroImageSingle height={50} img={img1} />
			<AirbnbHeroImageDouble img1={img2} height1={50} img2={img3} height2={20} />
			<AirbnbHeroImageDouble img1={img5} height1={30} img2={img4} height2={50} />
			<AirbnbHeroImageDouble img1={img9} height1={35} img2={img6} height2={30} />
			<AirbnbHeroImageSingle height={35} img={img8} />
		</div>
		<!-- hero text -->
		<div class="flex flex-col justify-center w-full px-20 py-5 space-y-8">
			<h1 class="text-5xl font-semibold">Online Experiences</h1>
			<p class="w-5/6 font-medium text-lg">
				Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
			</p>
		</div>
		<!-- travel cards -->
		<div class="scroll flex overflow-x-scroll space-x-4 px-4 py-5 my-10">
			{#each cardData as card}
				<AirbnbDestinationCard {card} />
			{/each}
		</div>
		<div class="flex w-full justify-center my-2 text-[#ff5a5f] font-bold">
			<p>© Just Another abnb Clone</p>
		</div>
	</div>
</div>

<style>
	/* Chrome */
	.scroll::-webkit-scrollbar {
		scrollbar-color: #ff5a5f white;
		scrollbar-width: thin;
		/* steal shadow from tailwind :D */
		--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
			0 4px 6px -4px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
	/* Firefox */
	.scroll {
		scrollbar-color: #ff5a5f white;
		scrollbar-width: thin;
		/* steal shadow from tailwind :D */
		--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
			0 4px 6px -4px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
</style>
