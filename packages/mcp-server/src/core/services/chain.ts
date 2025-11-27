import Docker from 'dockerode';

const docker = new Docker();

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
 * Uses GitHub Container Registry API to query available tags
 */
export async function getAvailableSeiVersions(): Promise<SeiChainVersion[]> {
	try {
		// Use GitHub Container Registry API directly
		return await getVersionsFromRegistryAPI();
	} catch (error) {
		throw new Error(`Failed to get available Sei versions: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Get versions using GitHub Container Registry API with fetch
 */
async function getVersionsFromRegistryAPI(): Promise<SeiChainVersion[]> {
	try {
		// Use fetch to query the GitHub Container Registry API
		const response = await fetch('https://ghcr.io/v2/sei-protocol/sei/tags/list', {
			headers: {
				'Accept': 'application/vnd.docker.distribution.manifest.v2+json'
			}
		});

		if (!response.ok) {
			throw new Error(`Registry API returned ${response.status}: ${response.statusText}`);
		}

		const data = await response.json() as { tags?: string[] };

		if (!data.tags || !Array.isArray(data.tags)) {
			throw new Error('No tags found in registry response');
		}

		// Convert to version objects (without detailed metadata)
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
			const existingContainer = docker.getContainer(containerName);
			await existingContainer.stop();
			await existingContainer.remove();
		} catch (error) {
			// Ignore errors when stopping/removing non-existent containers
		}

		// Pull the image
		const imageTag = `ghcr.io/sei-protocol/sei:${version}`;

		await new Promise<void>((resolve, reject) => {
			docker.pull(imageTag, (err: Error | null, stream: NodeJS.ReadableStream) => {
				if (err) {
					reject(err);
					return;
				}

				docker.modem.followProgress(stream, (err: Error | null) => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				});
			});
		});

		// Create and start the container using dockerode
		const container = await docker.createContainer({
			Image: imageTag,
			name: containerName,
			Cmd: [
				'seid', 'start',
				'--chain-id', chainId,
				'--moniker', moniker,
				'--rpc.laddr', 'tcp://0.0.0.0:26657',
				'--api.enable', 'true',
				'--api.address', 'tcp://0.0.0.0:1317',
				'--grpc.address', '0.0.0.0:9090',
				'--evm-rpc.address', '0.0.0.0:8545'
			],
			ExposedPorts: {
				'26657/tcp': {},
				'1317/tcp': {},
				'9090/tcp': {},
				'8545/tcp': {},
				'26656/tcp': {}
			},
			HostConfig: {
				PortBindings: {
					'26657/tcp': [{ HostPort: rpcPort.toString() }],
					'1317/tcp': [{ HostPort: restPort.toString() }],
					'9090/tcp': [{ HostPort: grpcPort.toString() }],
					'8545/tcp': [{ HostPort: evmRpcPort.toString() }],
					'26656/tcp': [{ HostPort: p2pPort.toString() }]
				},
				Binds: [`${dataDir}:/root/.sei`]
			}
		});

		await container.start();
		const containerInfo = await container.inspect();
		const containerId = containerInfo.Id;

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
		const container = docker.getContainer(containerName);
		await container.stop();
		await container.remove();
	} catch (error) {
		throw new Error(`Failed to stop Sei chain: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Get status of running Sei chain containers
 */
export async function getSeiChainStatus(): Promise<DockerContainer[]> {
	try {
		const containers = await docker.listContainers({ all: true });
		
		// Filter for Sei chain containers
		const seiContainers = containers.filter(container => 
			container.Image.includes('ghcr.io/sei-protocol/sei') ||
			container.Names.some(name => name.includes('sei-chain'))
		);

		return seiContainers.map(container => ({
			id: container.Id.substring(0, 12),
			name: container.Names[0]?.replace('/', '') || '',
			image: container.Image,
			status: container.Status,
			ports: container.Ports.map(port => 
				port.PublicPort ? `${port.PublicPort}:${port.PrivatePort}` : `${port.PrivatePort}`
			).join(', '),
			created: new Date(container.Created * 1000).toISOString()
		}));
	} catch (error) {
		throw new Error(`Failed to get Sei chain status: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Get logs from a Sei chain container
 */
export async function getSeiChainLogs(containerName: string, lines = 100): Promise<string> {
	try {
		const container = docker.getContainer(containerName);
		const logStream = await container.logs({
			stdout: true,
			stderr: true,
			tail: lines,
			follow: false
		});
		
		return logStream.toString();
	} catch (error) {
		throw new Error(`Failed to get Sei chain logs: ${error instanceof Error ? error.message : String(error)}`);
	}
}
