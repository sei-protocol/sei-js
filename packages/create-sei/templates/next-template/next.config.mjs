/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Linting is handled by Biome — skip ESLint during builds.
		ignoreDuringBuilds: true,
	},
	images: {
		// Images stay unoptimized so the generated app needs no native Sharp
		// build. Keep the manifest's Sharp override: Next declares
		// `^0.34.3 || ^0.35.4`, and the 0.34.x half is still inside
		// GHSA-rgj7-g3m4-5g8c, so 0.35.4 is the advisory floor. Loosening that
		// pin reintroduces a high finding even though this flag is off.
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
