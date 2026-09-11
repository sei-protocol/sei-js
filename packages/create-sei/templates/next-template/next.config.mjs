/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Linting is handled by Biome — skip ESLint during builds.
		ignoreDuringBuilds: true,
	},
	images: {
		// Next 15.5.25 declares Sharp `^0.34.3 || ^0.35.4`, so the pinned 0.35.4 is
		// inside its supported range. Images stay unoptimized so the generated app
		// needs no native Sharp build; that is now a template choice, not a
		// security constraint.
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
