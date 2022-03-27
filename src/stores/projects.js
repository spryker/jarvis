import { writable } from 'svelte/store';

export const projects = writable({ "lastCallToReleaseApp": null, "previousProjects": [], "lastProjectUsed": null });