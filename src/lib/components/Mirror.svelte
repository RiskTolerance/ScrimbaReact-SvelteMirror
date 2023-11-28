<script lang="ts">
	export let url: string;
	import logo from '$lib/assets/react.svg';
</script>

<div
	class="absolute flex justify-center items-center rounded-tl-full rounded-bl-full right-0 top-1/2 -translate-y-10 w-16 h-20 bg-slate-950"
>
	<a href={url} target="_blank">
		<img class="w-10 h-10" src={logo} alt="React" />
	</a>
</div>
