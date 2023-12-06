<script lang="ts">
	import ProjectListItem from '$lib/components/ProjectListItem.svelte';

	import { mainH } from '$lib/store';

	type Project = {
		name: string;
		localUrl: string;
		externalUrl: string;
	};

	type projectsArray = Array<Project>;

	const projectsArr: projectsArray = [
		{
			name: 'Svelte Facts',
			localUrl: '/projects/sveltefacts',
			externalUrl: 'https://next-sveltekit-mirror.netlify.app/projects/reactfacts'
		},
		{
			name: 'airbnb Clone',
			localUrl: '/projects/airbnbclone',
			externalUrl: 'https://next-sveltekit-mirror.netlify.app/projects/airbnbclone'
		}
	];
</script>

<div style="height: {$mainH}px;" class="flex flex-col w-full items-center justify-center">
	<div class="w-1/4 text-white flex flex-col space-y-6 mt-8">
		<h1>This is a list of links to the projects I have completed or am currently working on:</h1>
		<ul class="text-xl">
			{#each projectsArr as project}
				<ProjectListItem
					name={project.name}
					localUrl={project.localUrl}
					externalUrl={project.externalUrl}
				/>
			{/each}
		</ul>
	</div>
</div>
