<script lang="ts">
	import ProjectListItem from '$lib/components/projects/ProjectListItem.svelte';
	import ProjectListItemDisabled from '$lib/components/projects/ProjectListItemDisabled.svelte';
	import { mainH } from '$lib/store';

	type Project = {
		name: string;
		localUrl: string;
		externalUrl: string;
		status: boolean;
	};

	type projectsArray = Array<Project>;

	const projectsArr: projectsArray = [
		{
			name: 'Svelte Facts',
			localUrl: '/projects/sveltefacts',
			externalUrl: 'https://next-sveltekit-mirror.netlify.app/projects/reactfacts',
			status: true
		},
		{
			name: 'airbnb Clone',
			localUrl: '/projects/airbnbclone',
			externalUrl: 'https://next-sveltekit-mirror.netlify.app/projects/airbnbclone',
			status: true
		},
		{
			name: 'Meme Generator',
			localUrl: '/projects/memegen',
			externalUrl: 'https://www.google.com',
			status: false
		},
		{
			name: 'Notes App',
			localUrl: '/projects/notesapp',
			externalUrl: 'https://www.google.com',
			status: false
		}
	];
</script>

<div style="min-height: {$mainH}px;" class="flex flex-col w-full items-center justify-center p-10">
	<div class="max-w-1/4 text-white flex flex-col space-y-6">
		<h1>This is a list of links to the projects I have completed or am currently working on:</h1>
		<ul class="text-base md:text-xl space-y-3">
			{#each projectsArr as project}
				{#if project.status}
					<ProjectListItem {...project} />
				{:else}
					<ProjectListItemDisabled {...project} />
				{/if}
			{/each}
		</ul>
	</div>
</div>
