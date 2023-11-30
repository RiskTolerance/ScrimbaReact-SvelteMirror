<script lang="ts">
	export let img1: string;
	export let img2: string;
	export let height1: number;
	export let height2: number;
</script>

<div class="flex flex-col space-y-4 w-1/5 justify-center">
	<div style="height: {height1}%;" class="h-[50%] relative overflow-hidden rounded-md">
		<img
			class="h-full min-w-full absolute left-1/2 transform -translate-x-1/2 object-cover"
			src={img1}
			alt=""
		/>
	</div>
	<div style="height: {height2}%;" class="h-[50%] relative overflow-hidden rounded-md">
		<img
			class="h-full min-w-full absolute left-1/2 transform -translate-x-1/2 object-cover"
			src={img2}
			alt=""
		/>
	</div>
</div>
