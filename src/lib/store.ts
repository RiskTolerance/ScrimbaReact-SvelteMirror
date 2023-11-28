import { writable, type Writable } from 'svelte/store';

export const mainH: Writable<number> = writable(0);
