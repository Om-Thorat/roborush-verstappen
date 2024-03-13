import { writable } from "svelte/store";

export const login = writable(true);

export const mode = writable(1);

export const sip = writable("");