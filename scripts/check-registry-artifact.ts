import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import AssetListJSON from '../packages/registry/community-assetlist/assetlist.json';
import { filterTokenList } from '../packages/registry/src/tokens/filter';
import type { SeiTokenList } from '../packages/registry/src/tokens/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const artifactPath = join(root, 'packages/registry/dist/index.js');

export async function checkRegistryArtifact(): Promise<SeiTokenList> {
	if (!(await Bun.file(artifactPath).exists())) {
		throw new Error(`Registry artifact is missing: ${artifactPath}. Run the registry build first.`);
	}

	const artifact = (await import(`${pathToFileURL(artifactPath).href}?registry-artifact-check=${Date.now()}`)) as {
		TOKEN_LIST?: unknown;
	};
	const expected = filterTokenList(AssetListJSON, 'community-assetlist/assetlist.json');

	if (!isDeepStrictEqual(artifact.TOKEN_LIST, expected)) {
		throw new Error('Generated registry TOKEN_LIST does not match the filtered community asset-list source.');
	}

	return expected;
}

if (import.meta.main) {
	const tokenList = await checkRegistryArtifact();
	const counts = Object.entries(tokenList)
		.map(([network, assets]) => `${network}=${assets.length}`)
		.join(', ');
	console.log(`Verified generated registry artifact parity (${counts}).`);
}
