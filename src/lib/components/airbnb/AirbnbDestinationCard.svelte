<script lang="ts">
	import star from '$lib/assets/star.svg';
	import type { Card } from '$lib/types';
	export let card: Card;
	const { status, imgUrl, rating, numberOfRatings, country, descriptionShort, price } = card;
</script>

<!-- card container -->
<div class="tilt flex flex-col aspect-[3/5] h-[425px] rounded-md float-none">
	<!-- img -->
	<div class="w-full h-[315px] rounded-lg overflow-clip relative">
		{#if status.toLowerCase() === 'sold out'}
			<div
				class="pop absolute top-3 left-3 bg-white rounded-md px-2 py-1 flex justify-center items-center"
			>
				<h1>{status.toUpperCase()}</h1>
			</div>
		{/if}

		<img class="min-w-full h-[315px] object-cover" src={imgUrl} alt="" />
	</div>
	<!-- info -->
	<div class="flex relative flex-col space-y-2 my-2 h-[110px]">
		<div class="flex space-x-2 h-1/4 items-center">
			<span class="h-full w-5 mr-1">
				<img src={star} alt="star icon" />
			</span>
			<p class="flex relative items-center" aria-label="Location rating: {rating}">
				{rating}.0
			</p>
			<p class="text-gray-500" aria-label="Number of reviews: {numberOfRatings}">
				({numberOfRatings})
			</p>
			<p class="text-gray-500">•</p>
			<p class="text-gray-500" aria-label="Location country: {country}">{country}</p>
		</div>
		<div><p>{descriptionShort}</p></div>
		<p class="absolute bottom-0">
			<span class="font-bold">From ${price}</span> / person
		</p>
	</div>
</div>
