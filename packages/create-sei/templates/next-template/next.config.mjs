/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Linting is handled by Biome — skip ESLint during builds.
		ignoreDuringBuilds: true,
	},
	images: {
		// Next 15.5.21 declares vulnerable Sharp 0.34.x. Keep the secure 0.35.x
		// override for resolution, but do not rely on its unsupported optimizer API.
		unoptimized: true,
	},
	webpack: (config) => {
		// MetaMask SDK references React Native storage from a mobile-only code path.
		// Exclude it from this browser application instead of installing React Native.
		config.resolve.alias["@react-native-async-storage/async-storage"] = false;
		return config;
	},
};

export default nextConfig;
