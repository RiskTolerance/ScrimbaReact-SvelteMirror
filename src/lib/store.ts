import { writable, type Writable } from 'svelte/store';
import type { MemeState } from './types';

export const mainH: Writable<number> = writable(0);

const initialMemeState = {
	top_text: 'What if I told you',
	bottom_text: 'Svelte is better than React',
	id: '100947',
	name: 'Matrix Morpheus',
	url: 'https://i.imgflip.com/25w3.jpg',
	height: 500,
	width: 303,
	box_count: 2
};
export const memeState: Writable<MemeState> = writable(initialMemeState);
