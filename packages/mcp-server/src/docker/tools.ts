import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import Docker from 'dockerode';
import * as releases from './releases.js';
import { createAndStartSeiContainer } from './initialize.js';

const docker = new Docker();

/**
 * Register Sei chain release tools with the MCP server
 * Only registers tools if SEI_DOCKER_ENABLED environment variable is set to 'true'
 *
 * @param server The MCP server instance
 */
export function registerDockerTools(server: McpServer) {
	// Check if Docker tools are enabled via environment variable
	if (process.env.SEI_DOCKER_ENABLED !== 'true') {
		return;
	}
	// Get available Sei chain releases
	server.tool(
		'get_sei_releases',
		'Get a list of available Sei chain releases from GitHub. Returns official releases with metadata like publication date and download links.',
		{},
		async () => {
			try {
				const seiReleases = await releases.getSeiReleases();

				return {
					content: [
						{
							type: 'text',
							text: JSON.stringify(
								{
									releases: seiReleases,
									totalReleases: seiReleases.length,
									latestRelease: seiReleases[0]?.tag || 'unknown',
									repository: 'https://github.com/sei-protocol/sei-chain'
								},
								null,
								2
							)
						}
					]
				};
			} catch (error) {
				return {
					content: [
						{
							type: 'text',
							text: `Error fetching Sei releases: ${error instanceof Error ? error.message : String(error)}`
						}
					],
					isError: true
				};
			}
		}
	);

	// Start Sei chain container
	server.tool(
		'start_sei_chain',
		'Start a Sei chain Docker container for a specific version. This will pull the image if needed and start a local Sei blockchain node.',
		{
			version: z.string().optional().describe("The Sei version to run (e.g., 'v6.1.0', 'latest'). Defaults to 'latest'"),
			containerName: z.string().optional().describe("Custom name for the Docker container. Defaults to 'sei-chain-{version}'"),
			rpcPort: z.number().optional().describe('Port for RPC endpoint (default: 26657)'),
			restPort: z.number().optional().describe('Port for REST API endpoint (default: 1317)'),
			evmRpcPort: z.number().optional().describe('Port for EVM RPC endpoint (default: 8545)'),
			grpcPort: z.number().optional().describe('Port for gRPC endpoint (default: 9090)')
		},
		async ({ version = 'latest', containerName, rpcPort = 26657, restPort = 1317, evmRpcPort = 8545, grpcPort = 9090 }) => {
			try {
				// Generate container name if not provided
				const finalContainerName = containerName || `sei-chain-${version.replace(/[^a-zA-Z0-9]/g, '-')}`;

				// Stop and remove existing container if it exists
				try {
					const existingContainer = docker.getContainer(finalContainerName);
					await existingContainer.stop();
					await existingContainer.remove();
				} catch (error) {
					// Ignore errors when stopping/removing non-existent containers
				}

				// Pull the image and create/start the container
				const imageTag = `ghcr.io/sei-protocol/sei:${version}`;
				const { container, containerId } = await createAndStartSeiContainer(
					docker,
					imageTag,
					finalContainerName,
					rpcPort,
					restPort,
					evmRpcPort,
					grpcPort
				);

				return {
					content: [
						{
							type: 'text',
							text: JSON.stringify(
								{
									success: true,
									version,
									containerId,
									containerName: finalContainerName,
									ports: {
										rpc: rpcPort,
										rest: restPort,
										evmRpc: evmRpcPort,
										grpc: grpcPort
									},
									endpoints: {
										rpc: `http://localhost:${rpcPort}`,
										rest: `http://localhost:${restPort}`,
										evmRpc: `http://localhost:${evmRpcPort}`,
										grpc: `http://localhost:${grpcPort}`
									},
									dockerImage: imageTag,
									message: 'Sei chain started successfully'
								},
								null,
								2
							)
						}
					]
				};
			} catch (error) {
				return {
					content: [
						{
							type: 'text',
							text: `Error starting Sei chain: ${error instanceof Error ? error.message : String(error)}`
						}
					],
					isError: true
				};
			}
		}
	);

	// Get running Sei chain containers
	server.tool(
		'get_running_chains',
		'Get a list of currently running Sei chain Docker containers. Shows container names, status, ports, and runtime information.',
		{},
		async () => {
			try {
				const containers = await docker.listContainers({ all: false }); // Only running containers
				
				// Filter for Sei chain containers
				const seiContainers = containers.filter(container => 
					container.Names.some(name => name.includes('sei-chain')) ||
					container.Image.includes('sei-protocol/sei') ||
					container.Image.includes('ghcr.io/sei-protocol/sei')
				);

				const containerDetails = await Promise.all(
					seiContainers.map(async (container) => {
						try {
							const containerObj = docker.getContainer(container.Id);
							const inspectData = await containerObj.inspect();
							
							// Extract port mappings
							const portMappings: Record<string, string> = {};
							if (inspectData.NetworkSettings.Ports) {
								for (const [containerPort, hostBindings] of Object.entries(inspectData.NetworkSettings.Ports)) {
									if (hostBindings && hostBindings.length > 0) {
										const hostPort = hostBindings[0].HostPort;
										const portName = containerPort.replace('/tcp', '');
										
										// Map common Sei ports to their purposes
										if (portName === '26657') portMappings.rpc = `http://localhost:${hostPort}`;
										else if (portName === '1317') portMappings.rest = `http://localhost:${hostPort}`;
										else if (portName === '8545') portMappings.evmRpc = `http://localhost:${hostPort}`;
										else portMappings[portName] = `http://localhost:${hostPort}`;
									}
								}
							}

							return {
								id: container.Id.substring(0, 12),
								name: container.Names[0].replace('/', ''),
								image: container.Image,
								status: container.Status,
								state: container.State,
								created: new Date(container.Created * 1000).toISOString(),
								ports: portMappings,
								uptime: inspectData.State.StartedAt ? 
									Math.floor((Date.now() - new Date(inspectData.State.StartedAt).getTime()) / 1000) : 0
							};
						} catch (error) {
							return {
								id: container.Id.substring(0, 12),
								name: container.Names[0].replace('/', ''),
								image: container.Image,
								status: container.Status,
								state: container.State,
								created: new Date(container.Created * 1000).toISOString(),
								ports: {},
								uptime: 0,
								error: error instanceof Error ? error.message : String(error)
							};
						}
					})
				);

				return {
					content: [
						{
							type: 'text',
							text: JSON.stringify({
								success: true,
								totalContainers: containerDetails.length,
								containers: containerDetails,
								message: containerDetails.length > 0 
									? `Found ${containerDetails.length} running Sei chain container(s)`
									: 'No running Sei chain containers found'
							}, null, 2)
						}
					]
				};
			} catch (error) {
				return {
					content: [
						{
							type: 'text',
							text: `Error getting running chains: ${error instanceof Error ? error.message : String(error)}`
						}
					],
					isError: true
				};
			}
		}
	);

	// Restart Sei chain container
	server.tool(
		'restart_sei_container',
		'Restart a stopped Sei chain Docker container. This will start an existing container without re-initializing the blockchain data.',
		{
			containerName: z.string().optional().describe("Name of the container to restart. If not provided, will show all available stopped Sei containers")
		},
		async ({ containerName }) => {
			try {
				const containers = await docker.listContainers({ all: true });
				let targetContainers: Array<{ id: string; name: string; status: string; state: string }> = [];

				if (containerName) {
					// Restart specific container
					const container = containers.find(c => 
						c.Names.some(name => name.replace('/', '') === containerName)
					);
					
					if (!container) {
						return {
							content: [
								{
									type: 'text',
									text: JSON.stringify({
										success: false,
										message: `Container '${containerName}' not found`
									}, null, 2)
								}
							]
						};
					}
					
					targetContainers = [{
						id: container.Id,
						name: containerName,
						status: container.Status,
						state: container.State
					}];
				} else {
					// Find all stopped Sei chain containers
					const seiContainers = containers.filter(container => 
						(container.Names.some(name => name.includes('sei-chain')) ||
						container.Image.includes('sei-protocol/sei') ||
						container.Image.includes('ghcr.io/sei-protocol/sei')) &&
						container.State !== 'running'
					);

					if (seiContainers.length === 0) {
						return {
							content: [
								{
									type: 'text',
									text: JSON.stringify({
										success: false,
										message: 'No stopped Sei chain containers found to restart'
									}, null, 2)
								}
							]
						};
					}

					targetContainers = seiContainers.map(container => ({
						id: container.Id,
						name: container.Names[0].replace('/', ''),
						status: container.Status,
						state: container.State
					}));
				}

				const results: Array<{
					container: string;
					restarted: boolean;
					status: 'success' | 'error';
					error?: string;
					previousState?: string;
					ports?: Record<string, string>;
				}> = [];

				for (const containerInfo of targetContainers) {
					try {
						const container = docker.getContainer(containerInfo.id);
						const inspectData = await container.inspect();
						
						// Check if container is already running
						if (inspectData.State.Running) {
							results.push({
								container: containerInfo.name,
								restarted: false,
								status: 'error',
								error: 'Container is already running',
								previousState: containerInfo.state
							});
							continue;
						}
						
						// Start the container
						await container.start();
						
						// Get updated container info including port mappings
						const updatedInspectData = await container.inspect();
						const portMappings: Record<string, string> = {};
						
						if (updatedInspectData.NetworkSettings.Ports) {
							for (const [containerPort, hostBindings] of Object.entries(updatedInspectData.NetworkSettings.Ports)) {
								if (hostBindings && hostBindings.length > 0) {
									const hostPort = hostBindings[0].HostPort;
									const portName = containerPort.replace('/tcp', '');
									
									// Map common Sei ports to their purposes
									if (portName === '26657') portMappings.rpc = `http://localhost:${hostPort}`;
									else if (portName === '1317') portMappings.rest = `http://localhost:${hostPort}`;
									else if (portName === '8545') portMappings.evmRpc = `http://localhost:${hostPort}`;
									else if (portName === '9090') portMappings.grpc = `http://localhost:${hostPort}`;
									else portMappings[portName] = `http://localhost:${hostPort}`;
								}
							}
						}

						results.push({
							container: containerInfo.name,
							restarted: true,
							status: 'success',
							previousState: containerInfo.state,
							ports: portMappings
						});
					} catch (error) {
						results.push({
							container: containerInfo.name,
							restarted: false,
							status: 'error',
							error: error instanceof Error ? error.message : String(error),
							previousState: containerInfo.state
						});
					}
				}

				const successCount = results.filter(r => r.status === 'success').length;
				const errorCount = results.filter(r => r.status === 'error').length;

				return {
					content: [
						{
							type: 'text',
							text: JSON.stringify({
								success: errorCount === 0,
								message: `Processed ${results.length} container(s): ${successCount} restarted, ${errorCount} failed`,
								containers: results,
								summary: {
									total: results.length,
									restarted: successCount,
									failed: errorCount
								}
							}, null, 2)
						}
					]
				};
			} catch (error) {
				return {
					content: [
						{
							type: 'text',
							text: `Error restarting containers: ${error instanceof Error ? error.message : String(error)}`
						}
					],
					isError: true
				};
			}
		}
	);

	// Delete Sei chain container
	server.tool(
		'delete_sei_container',
		'Delete (remove) one or more Sei chain Docker containers. This will permanently remove the container and its data. The container must be stopped first.',
		{
			containerName: z.string().optional().describe("Name of the specific container to delete. If not provided, will show all available Sei containers for selection"),
			force: z.boolean().optional().describe('Force removal of running containers (stops them first, default: false)'),
			removeVolumes: z.boolean().optional().describe('Remove associated volumes with the container (default: false)')
		},
		async ({ containerName, force = false, removeVolumes = false }) => {
			try {
				const containers = await docker.listContainers({ all: true });
				let targetContainers: Array<{ id: string; name: string; status: string; state: string }> = [];

				if (containerName) {
					// Delete specific container
					const container = containers.find(c => 
						c.Names.some(name => name.replace('/', '') === containerName)
					);
					
					if (!container) {
						return {
							content: [
								{
									type: 'text',
									text: JSON.stringify({
										success: false,
										message: `Container '${containerName}' not found`
									}, null, 2)
								}
							]
						};
					}
					
					targetContainers = [{
						id: container.Id,
						name: containerName,
						status: container.Status,
						state: container.State
					}];
				} else {
					// Find all sei-chain containers
					const seiContainers = containers.filter(container => 
						container.Names.some(name => name.includes('sei-chain')) ||
						container.Image.includes('sei-protocol/sei') ||
						container.Image.includes('ghcr.io/sei-protocol/sei')
					);

					if (seiContainers.length === 0) {
						return {
							content: [
								{
									type: 'text',
									text: JSON.stringify({
										success: false,
										message: 'No Sei chain containers found to delete'
									}, null, 2)
								}
							]
						};
					}

					targetContainers = seiContainers.map(container => ({
						id: container.Id,
						name: container.Names[0].replace('/', ''),
						status: container.Status,
						state: container.State
					}));
				}

				const results: Array<{
					container: string;
					deleted: boolean;
					status: 'success' | 'error';
					error?: string;
					volumesRemoved?: boolean;
					wasRunning?: boolean;
				}> = [];
				for (const containerInfo of targetContainers) {
					try {
						const container = docker.getContainer(containerInfo.id);
						const inspectData = await container.inspect();
						
						// Stop container if it's running and force is enabled
						if (inspectData.State.Running) {
							if (force) {
								await container.stop();
							} else {
								results.push({
									container: containerInfo.name,
									deleted: false,
									status: 'error',
									error: 'Container is running. Use force=true to stop and remove, or stop it first.'
								});
								continue;
							}
						}
						
						// Remove the container
						await container.remove({ 
							v: removeVolumes, // Remove volumes if requested
							force: force 
						});

						results.push({
							container: containerInfo.name,
							deleted: true,
							status: 'success',
							volumesRemoved: removeVolumes,
							wasRunning: inspectData.State.Running
						});
					} catch (error) {
						results.push({
							container: containerInfo.name,
							deleted: false,
							status: 'error',
							error: error instanceof Error ? error.message : String(error)
						});
					}
				}

				const successCount = results.filter(r => r.status === 'success').length;
				const errorCount = results.filter(r => r.status === 'error').length;

				return {
					content: [
						{
							type: 'text',
							text: JSON.stringify({
								success: errorCount === 0,
								message: `Processed ${results.length} container(s): ${successCount} deleted, ${errorCount} failed`,
								containers: results,
								summary: {
									total: results.length,
									deleted: successCount,
									failed: errorCount,
									options: {
										force,
										removeVolumes
									}
								}
							}, null, 2)
						}
					]
				};
			} catch (error) {
				return {
					content: [
						{
							type: 'text',
							text: `Error deleting containers: ${error instanceof Error ? error.message : String(error)}`
						}
					],
					isError: true
				};
			}
		}
	);

	// Stop Sei chain container
	server.tool(
		'stop_sei_chain',
		'Stop and remove a running Sei chain Docker container. This will gracefully stop the blockchain node and clean up the container.',
		{
			containerName: z.string().optional().describe("Name of the container to stop. If not provided, will attempt to stop containers matching 'sei-chain-*' pattern"),
			removeContainer: z.boolean().optional().describe('Whether to remove the container after stopping (default: false)')
		},
		async ({ containerName, removeContainer = false }) => {
			try {
				const containers = await docker.listContainers({ all: true });
				let targetContainers: string[] = [];

				if (containerName) {
					// Stop specific container
					targetContainers = [containerName];
				} else {
					// Find all sei-chain containers
					targetContainers = containers
						.filter(container => 
							container.Names.some(name => name.includes('sei-chain'))
						)
						.map(container => container.Names[0].replace('/', ''));
				}

				if (targetContainers.length === 0) {
					return {
						content: [
							{
								type: 'text',
								text: JSON.stringify({
									success: false,
									message: containerName 
										? `Container '${containerName}' not found`
										: 'No Sei chain containers found'
								}, null, 2)
							}
						]
					};
				}

				const results: Array<{
					container: string;
					stopped: boolean;
					removed: boolean;
					status: 'success' | 'error';
					error?: string;
				}> = [];
				for (const name of targetContainers) {
					try {
						const container = docker.getContainer(name);
						const containerInfo = await container.inspect();
						
						if (containerInfo.State.Running) {
							await container.stop();
						}
						
						if (removeContainer) {
							await container.remove();
						}

						results.push({
							container: name,
							stopped: true,
							removed: removeContainer,
							status: 'success'
						});
					} catch (error) {
						results.push({
							container: name,
							stopped: false,
							removed: false,
							status: 'error',
							error: error instanceof Error ? error.message : String(error)
						});
					}
				}

				const successCount = results.filter(r => r.status === 'success').length;
				const errorCount = results.filter(r => r.status === 'error').length;

				return {
					content: [
						{
							type: 'text',
							text: JSON.stringify({
								success: errorCount === 0,
								message: `Processed ${results.length} container(s): ${successCount} successful, ${errorCount} failed`,
								containers: results,
								summary: {
									total: results.length,
									successful: successCount,
									failed: errorCount
								}
							}, null, 2)
						}
					]
				};
			} catch (error) {
				return {
					content: [
						{
							type: 'text',
							text: `Error stopping Sei chain: ${error instanceof Error ? error.message : String(error)}`
						}
					],
					isError: true
				};
			}
		}
	);
}
