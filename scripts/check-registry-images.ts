import AssetListJSON from '../packages/registry/community-assetlist/assetlist.json';
import { filterTokenList } from '../packages/registry/src/tokens/filter';

const DEFAULT_TIMEOUT_MS = 15_000;
const DEFAULT_CONCURRENCY = 8;
const DEFAULT_RETRY_DELAY_MS = 500;

export interface ImageCheckDependencies {
	request(url: string, init: RequestInit): Promise<Response>;
	sleep(milliseconds: number): Promise<void>;
}

const defaultDependencies: ImageCheckDependencies = {
	request: (url, init) => fetch(url, init),
	sleep: (milliseconds) => Bun.sleep(milliseconds)
};

export function retainedRegistryImageUrls(): string[] {
	const tokenList = filterTokenList(AssetListJSON, 'community-assetlist/assetlist.json');

	return [
		...new Set(
			Object.values(tokenList).flatMap((assets) => assets.flatMap(({ images }) => [images.png, images.svg].filter((url): url is string => url !== undefined)))
		)
	].sort();
}

async function requestImage(url: string, method: 'HEAD' | 'GET', timeoutMs: number, dependencies: ImageCheckDependencies): Promise<Response> {
	return dependencies.request(url, {
		method,
		redirect: 'follow',
		headers: {
			'user-agent': 'sei-js-registry-image-check',
			...(method === 'GET' ? { range: 'bytes=0-0' } : {})
		},
		signal: AbortSignal.timeout(timeoutMs)
	});
}

async function probeImage(url: string, timeoutMs: number, dependencies: ImageCheckDependencies): Promise<Response> {
	let response = await requestImage(url, 'HEAD', timeoutMs, dependencies);
	if (response.status === 405 || response.status === 501) {
		response = await requestImage(url, 'GET', timeoutMs, dependencies);
		await response.body?.cancel();
	}

	return response;
}

function isTransientHttpStatus(status: number): boolean {
	return status === 429 || status >= 500;
}

export async function checkRegistryImageUrl(
	url: string,
	options: { timeoutMs?: number; retryDelayMs?: number; dependencies?: ImageCheckDependencies } = {}
): Promise<string | undefined> {
	const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
	const retryDelayMs = options.retryDelayMs ?? DEFAULT_RETRY_DELAY_MS;
	const dependencies = options.dependencies ?? defaultDependencies;

	try {
		for (let attempt = 0; attempt < 2; attempt += 1) {
			const response = await probeImage(url, timeoutMs, dependencies);
			if (response.ok) {
				return undefined;
			}
			if (attempt === 0 && isTransientHttpStatus(response.status)) {
				await dependencies.sleep(retryDelayMs);
				continue;
			}

			return `HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ''}: ${url}`;
		}
	} catch (error) {
		return `${error instanceof Error ? error.message : String(error)}: ${url}`;
	}

	return `Image check exhausted retries without a response: ${url}`;
}

export async function checkRegistryImages(
	options: { timeoutMs?: number; concurrency?: number; retryDelayMs?: number; dependencies?: ImageCheckDependencies } = {}
): Promise<number> {
	const urls = retainedRegistryImageUrls();
	const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
	const concurrency = Math.max(1, Math.min(options.concurrency ?? DEFAULT_CONCURRENCY, urls.length));
	const failures: string[] = [];
	let nextIndex = 0;

	async function worker(): Promise<void> {
		while (nextIndex < urls.length) {
			const url = urls[nextIndex];
			nextIndex += 1;
			const failure = await checkRegistryImageUrl(url, {
				timeoutMs,
				retryDelayMs: options.retryDelayMs,
				dependencies: options.dependencies
			});
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
