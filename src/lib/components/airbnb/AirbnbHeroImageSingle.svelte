<script lang="ts">
	export let img: string;
	export let height: number;
</script>

<div class="flex flex-col space-y-4 w-1/5 justify-center">
	<div style="height: {height}%;" class="h-[50%] relative overflow-hidden rounded-md">
		<img
			class="h-full min-w-full absolute left-1/2 transform -translate-x-1/2 object-cover"
			src={img}
			alt=""
		/>
	</div>
</div>
