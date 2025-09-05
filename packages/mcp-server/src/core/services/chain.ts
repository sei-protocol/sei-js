import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Interface for Sei chain version information
 */
export interface SeiChainVersion {
	tag: string;
	digest: string;
	created: string;
	size: string;
}

/**
 * Interface for Docker container information
 */
export interface DockerContainer {
	id: string;
	name: string;
	image: string;
	status: string;
	ports: string;
	created: string;
}

/**
 * Get available Sei chain versions from GitHub Container Registry
 * Uses skopeo to query the registry without pulling images
 */
export async function getAvailableSeiVersions(): Promise<SeiChainVersion[]> {
	try {
		// First try using skopeo (more reliable for registry queries)
		try {
			const { stdout } = await execAsync('skopeo list-tags docker://ghcr.io/sei-protocol/sei');
			const data = JSON.parse(stdout);

			// Convert tags to version objects with additional metadata
			const versions: SeiChainVersion[] = [];

			for (const tag of data.Tags || []) {
				try {
					// Get image details for each tag
					const { stdout: inspectOutput } = await execAsync(`skopeo inspect docker://ghcr.io/sei-protocol/sei:${tag}`);
					const imageInfo = JSON.parse(inspectOutput);

					versions.push({
						tag,
						digest: imageInfo.Digest || 'unknown',
						created: imageInfo.Created || 'unknown',
						size: imageInfo.Size ? `${Math.round(imageInfo.Size / 1024 / 1024)}MB` : 'unknown'
					});
				} catch (error) {
					// If we can't get details for a specific tag, still include it
					versions.push({
						tag,
						digest: 'unknown',
						created: 'unknown',
						size: 'unknown'
					});
				}
			}

			return versions.sort((a, b) => b.tag.localeCompare(a.tag, undefined, { numeric: true }));
		} catch (skopeoError) {
			// Fallback to docker registry API
			console.warn('Skopeo not available, falling back to registry API');
			return await getVersionsFromRegistryAPI();
		}
	} catch (error) {
		throw new Error(`Failed to get available Sei versions: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Fallback method using GitHub Container Registry API
 */
async function getVersionsFromRegistryAPI(): Promise<SeiChainVersion[]> {
	try {
		// Use curl to query the GitHub Container Registry API
		const { stdout } = await execAsync(
			'curl -s "https://ghcr.io/v2/sei-protocol/sei/tags/list" -H "Accept: application/vnd.docker.distribution.manifest.v2+json"'
		);

		const data = JSON.parse(stdout);

		if (!data.tags) {
			throw new Error('No tags found in registry response');
		}

		// Convert to version objects (without detailed metadata in fallback)
		const versions: SeiChainVersion[] = data.tags.map((tag: string) => ({
			tag,
			digest: 'unknown',
			created: 'unknown',
			size: 'unknown'
		}));

		return versions.sort((a, b) => b.tag.localeCompare(a.tag, undefined, { numeric: true }));
	} catch (error) {
		throw new Error(`Failed to query registry API: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Check if a specific Sei version exists in the registry
 */
export async function checkSeiVersionExists(version: string): Promise<boolean> {
	try {
		const versions = await getAvailableSeiVersions();
		return versions.some((v) => v.tag === version || v.tag === `v${version}` || v.tag === version.replace('v', ''));
	} catch (error) {
		console.error('Error checking version existence:', error);
		return false;
	}
}

/**
 * Get the latest Sei version
 */
export async function getLatestSeiVersion(): Promise<string> {
	try {
		const versions = await getAvailableSeiVersions();

		// Filter out non-semantic versions and find the latest
		const semanticVersions = versions.filter((v) => /^v?\d+\.\d+\.\d+$/.test(v.tag));

		if (semanticVersions.length === 0) {
			// Fallback to first available version
			return versions[0]?.tag || 'latest';
		}

		return semanticVersions[0].tag;
	} catch (error) {
		throw new Error(`Failed to get latest Sei version: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Start a Sei chain Docker container
 */
export async function startSeiChain(
	version = 'latest',
	options: {
		containerName?: string;
		rpcPort?: number;
		restPort?: number;
		grpcPort?: number;
		evmRpcPort?: number;
		p2pPort?: number;
		dataDir?: string;
		chainId?: string;
		moniker?: string;
	} = {}
): Promise<{ containerId: string; containerName: string; ports: Record<string, number> }> {
	const {
		containerName = `sei-chain-${version.replace(/[^a-zA-Z0-9]/g, '-')}`,
		rpcPort = 26657,
		restPort = 1317,
		grpcPort = 9090,
		evmRpcPort = 8545,
		p2pPort = 26656,
		dataDir = `./sei-data-${version}`,
		chainId = 'sei-local',
		moniker = 'sei-local-node'
	} = options;

	try {
		// Check if version exists
		if (version !== 'latest') {
			const exists = await checkSeiVersionExists(version);
			if (!exists) {
				throw new Error(`Version ${version} not found in registry`);
			}
		}

		// Stop existing container if it exists
		try {
			await execAsync(`docker stop ${containerName} 2>/dev/null || true`);
			await execAsync(`docker rm ${containerName} 2>/dev/null || true`);
		} catch (error) {
			// Ignore errors when stopping/removing non-existent containers
		}

		// Pull the image
		const imageTag = `ghcr.io/sei-protocol/sei:${version}`;

		await execAsync(`docker pull ${imageTag}`);

		// Create data directory
		await execAsync(`mkdir -p ${dataDir}`);

		// Build docker run command
		const dockerCmd = [
			'docker run -d',
			`--name ${containerName}`,
			`-p ${rpcPort}:26657`,
			`-p ${restPort}:1317`,
			`-p ${grpcPort}:9090`,
			`-p ${evmRpcPort}:8545`,
			`-p ${p2pPort}:26656`,
			`-v ${dataDir}:/root/.sei`,
			imageTag,
			'seid start',
			`--chain-id ${chainId}`,
			`--moniker ${moniker}`,
			'--rpc.laddr tcp://0.0.0.0:26657',
			'--api.enable true',
			'--api.address tcp://0.0.0.0:1317',
			'--grpc.address 0.0.0.0:9090',
			'--evm-rpc.address 0.0.0.0:8545'
		].join(' ');

		const { stdout } = await execAsync(dockerCmd);
		const containerId = stdout.trim();

		return {
			containerId,
			containerName,
			ports: {
				rpc: rpcPort,
				rest: restPort,
				grpc: grpcPort,
				evmRpc: evmRpcPort,
				p2p: p2pPort
			}
		};
	} catch (error) {
		throw new Error(`Failed to start Sei chain: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Stop a Sei chain Docker container
 */
export async function stopSeiChain(containerName: string): Promise<void> {
	try {
		await execAsync(`docker stop ${containerName}`);
		await execAsync(`docker rm ${containerName}`);
	} catch (error) {
		throw new Error(`Failed to stop Sei chain: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Get status of running Sei chain containers
 */
export async function getSeiChainStatus(): Promise<DockerContainer[]> {
	try {
		const { stdout } = await execAsync(
			'docker ps -a --filter "ancestor=ghcr.io/sei-protocol/sei" --format "table {{.ID}}\\t{{.Names}}\\t{{.Image}}\\t{{.Status}}\\t{{.Ports}}\\t{{.CreatedAt}}"'
		);

		const lines = stdout.trim().split('\n');
		if (lines.length <= 1) {
			return [];
		}

		// Skip header line and parse container info
		return lines.slice(1).map((line) => {
			const [id, name, image, status, ports, created] = line.split('\t');
			return {
				id: id?.trim() || '',
				name: name?.trim() || '',
				image: image?.trim() || '',
				status: status?.trim() || '',
				ports: ports?.trim() || '',
				created: created?.trim() || ''
			};
		});
	} catch (error) {
		throw new Error(`Failed to get Sei chain status: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Get logs from a Sei chain container
 */
export async function getSeiChainLogs(containerName: string, lines = 100): Promise<string> {
	try {
		const { stdout } = await execAsync(`docker logs --tail ${lines} ${containerName}`);
		return stdout;
	} catch (error) {
		throw new Error(`Failed to get Sei chain logs: ${error instanceof Error ? error.message : String(error)}`);
	}
}
