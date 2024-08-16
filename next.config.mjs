import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	basePath: "/nyrule-rpg",
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({ });

export default withMDX(nextConfig);
