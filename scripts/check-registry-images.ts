import AssetListJSON from '../packages/registry/community-assetlist/assetlist.json';
import { filterTokenList } from '../packages/registry/src/tokens/filter';

const DEFAULT_TIMEOUT_MS = 15_000;
const DEFAULT_CONCURRENCY = 8;

export function retainedRegistryImageUrls(): string[] {
	const tokenList = filterTokenList(AssetListJSON, 'community-assetlist/assetlist.json');

	return [
		...new Set(
			Object.values(tokenList).flatMap((assets) => assets.flatMap(({ images }) => [images.png, images.svg].filter((url): url is string => url !== undefined)))
		)
	].sort();
}

async function requestImage(url: string, method: 'HEAD' | 'GET', timeoutMs: number): Promise<Response> {
	return fetch(url, {
		method,
		redirect: 'follow',
		headers: {
			'user-agent': 'sei-js-registry-image-check',
			...(method === 'GET' ? { range: 'bytes=0-0' } : {})
		},
		signal: AbortSignal.timeout(timeoutMs)
	});
}

async function checkImage(url: string, timeoutMs: number): Promise<string | undefined> {
	try {
		let response = await requestImage(url, 'HEAD', timeoutMs);
		if (response.status === 405 || response.status === 501) {
			response = await requestImage(url, 'GET', timeoutMs);
			await response.body?.cancel();
		}

		if (!response.ok) {
			return `HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ''}: ${url}`;
		}
	} catch (error) {
		return `${error instanceof Error ? error.message : String(error)}: ${url}`;
	}

	return undefined;
}

export async function checkRegistryImages(options: { timeoutMs?: number; concurrency?: number } = {}): Promise<number> {
	const urls = retainedRegistryImageUrls();
	const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
	const concurrency = Math.max(1, Math.min(options.concurrency ?? DEFAULT_CONCURRENCY, urls.length));
	const failures: string[] = [];
	let nextIndex = 0;

	async function worker(): Promise<void> {
		while (nextIndex < urls.length) {
			const url = urls[nextIndex];
			nextIndex += 1;
			const failure = await checkImage(url, timeoutMs);
			if (failure !== undefined) failures.push(failure);
		}
	}

	await Promise.all(Array.from({ length: concurrency }, () => worker()));

	if (failures.length > 0) {
		throw new Error(
			`Registry image link check failed for ${failures.length} of ${urls.length} URLs:\n${failures
				.sort()
				.map((failure) => `- ${failure}`)
				.join('\n')}`
		);
	}

	return urls.length;
}

if (import.meta.main) {
	const count = await checkRegistryImages();
	console.log(`Verified ${count} retained registry image URLs.`);
}
