import type Docker from 'dockerode';

/**
 * Creates and starts a Sei blockchain Docker container with comprehensive initialization
 */
export async function createAndStartSeiContainer(
	docker: Docker,
	imageTag: string,
	finalContainerName: string,
	rpcPort: number,
	restPort: number,
	evmRpcPort: number,
	grpcPort: number
) {
	// Pull the Docker image if it doesn't exist
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

	// Create and start the container with comprehensive initialization
	const container = await docker.createContainer({
		Image: imageTag,
		name: finalContainerName,
		Cmd: [
			'sh',
			'-c',
			`# Check if blockchain is already initialized
if [ ! -f ~/.sei/config/genesis.json ]; then
  echo "Initializing new Sei blockchain..."
  seid init demo --chain-id sei-chain && \
  seid keys add admin --keyring-backend test && \
  seid add-genesis-account $(seid keys show admin -a --keyring-backend test) 100000000000000000000usei,100000000000000000000uusdc,100000000000000000000uatom --keyring-backend test && \
  seid gentx admin 7000000000000000usei --chain-id sei-chain --keyring-backend test && \
  seid collect-gentxs && \
  sed -i 's/"max_deposit_period": "172800s"/"max_deposit_period": "60s"/g' ~/.sei/config/genesis.json && \
  sed -i 's/"voting_period": "172800s"/"voting_period": "30s"/g' ~/.sei/config/genesis.json && \
  sed -i 's/"expedited_voting_period": "86400s"/"expedited_voting_period": "10s"/g' ~/.sei/config/genesis.json && \
  sed -i 's/"vote_period": "5"/"vote_period": "2"/g' ~/.sei/config/genesis.json && \
  sed -i 's/"community_tax": "0.020000000000000000"/"community_tax": "0.000000000000000000"/g' ~/.sei/config/genesis.json && \
  sed -i 's/"max_gas": "-1"/"max_gas": "35000000"/g' ~/.sei/config/genesis.json && \
  seid config keyring-backend test
  echo "Blockchain initialization complete."
else
  echo "Blockchain already initialized, skipping setup..."
  seid config keyring-backend test
fi
echo "Starting Sei blockchain..."
seid start --chain-id sei-chain`
		],
		ExposedPorts: {
			'26657/tcp': {},
			'1317/tcp': {},
			'8545/tcp': {},
			'9090/tcp': {}
		},
		HostConfig: {
			PortBindings: {
				'26657/tcp': [{ HostPort: rpcPort.toString() }],
				'1317/tcp': [{ HostPort: restPort.toString() }],
				'8545/tcp': [{ HostPort: evmRpcPort.toString() }],
				'9090/tcp': [{ HostPort: grpcPort.toString() }]
			}
		}
	});

	await container.start();
	const containerInfo = await container.inspect();
	
	return {
		container,
		containerId: containerInfo.Id
	};
}
