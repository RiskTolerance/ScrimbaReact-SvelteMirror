import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`https://api.imgflip.com/get_memes`);
	const item = await res.json();
	const memes = item.data.memes;
	return { memes };
};
