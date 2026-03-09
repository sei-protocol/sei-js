/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Linting is handled by Biome — skip ESLint during builds.
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sei.io",
			},
		],
	},
};

export default nextConfig;
