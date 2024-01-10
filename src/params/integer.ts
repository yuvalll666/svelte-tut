// Must be called match for sveltekit to handle
export function match(param: string) {
	return /^\d+$/.test(param);
}
