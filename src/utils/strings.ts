export function equalsIgnoreCase(a: string, b: string): boolean {
	return a.toLocaleUpperCase().localeCompare(b.toLocaleUpperCase()) === 0;
}

export function includesIgnoreCase(outer: string, inner: string): boolean {
	return outer.toLocaleUpperCase().includes(inner.toLocaleUpperCase());
}
