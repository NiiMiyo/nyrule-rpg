import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h1: ({ children }) => <h1 className={HEADER_CLASS}>{ children }</h1>,
		h2: ({ children }) => <h2 className={HEADER_CLASS}>{ children }</h2>,
		h3: ({ children }) => <h3 className={HEADER_CLASS}>{ children }</h3>,
		h4: ({ children }) => <h4 className={HEADER_CLASS}>{ children }</h4>,
		h5: ({ children }) => <h5 className={HEADER_CLASS}>{ children }</h5>,
		h6: ({ children }) => <h6 className={HEADER_CLASS}>{ children }</h6>,
	};
}

export const HEADER_CLASS = "app-header";
