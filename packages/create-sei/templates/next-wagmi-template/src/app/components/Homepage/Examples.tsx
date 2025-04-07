'use client';

import { BANK_PRECOMPILE_ABI, BANK_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, WASM_PRECOMPILE_ADDRESS } from '@sei-js/evm';
import { useState } from 'react';
import { ReadContractParameters, formatEther, fromHex, parseEther, toHex } from 'viem';
import { useAccount, usePublicClient, useWriteContract } from 'wagmi';

import './Homepage.css';

function Examples() {
	const [balance, setBalance] = useState('');
	const [supply, setSupply] = useState('');
	const [count, setCount] = useState(0);

	const publicClient = usePublicClient();
	const { address } = useAccount();
	const { writeContractAsync } = useWriteContract();

	const formatLargeSeiNumber = (num: string, decimals: number): string => {
		if (num.length > 10) {
			return (
				(Number(num) / 1000000 / 1000000000).toLocaleString(navigator.language, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + ' B'
			);
		} else {
			return (Number(num) / 1000000).toLocaleString(navigator.language);
		}
	};

	const copyToClipboard = (text: string) => {
		try {
			navigator.clipboard.writeText(text);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		} finally {
			alert('Copied to clipboard!');
		}
	};

	const renderAddressExample = () => {
		return (
			<div className="card">
				<div className="card-header">
					<p className="card__title">Wallet address</p>
					<small className="card__description">
						<a href="https://viem.sh/docs/clients/public.html" target="_blank">
							Viem Public Client
						</a>{' '}
						query example
					</small>
				</div>
				<div className="card-body">
					<div className="content-background space-between">
						{address ? (
							<div>
								<p className="card-footer">{address}</p>
							</div>
						) : (
							<p> --- </p>
						)}

						<button className="small outline" onClick={() => copyToClipboard(address as string)}>
							Copy
						</button>
					</div>
				</div>
				<div className="card-footer"></div>
			</div>
		);
	};

	const getBalanceWagmi = async () => {
		if (!address || !publicClient) {
			return undefined;
		}
		const weiBalance = await publicClient.getBalance({ address });
		const seiBalance = formatEther(weiBalance);
		setBalance(seiBalance);
	};

	const renderBalanceExample = () => {
		return (
			<div className="card">
				<div className="card-header">
					<p className="card__title">Wallet balance</p>
					<small className="card__description">
						<a href="https://viem.sh/docs/clients/public.html" target="_blank">
							Viem Public Client
						</a>{' '}
						query example
					</small>
				</div>
				<div className="card-body">
					<div className="content-background space-between">
						<small>SEI</small>
						<p>{balance ? balance : '---'} SEI</p>
					</div>
				</div>
				<div className="card-footer">
					<button onClick={getBalanceWagmi}>Fetch balance</button>
				</div>
			</div>
		);
	};

	// Example of using precompiles to query native Sei modules.
	const getBankSupply = async () => {
		if (!publicClient) {
			return;
		}

		const params: ReadContractParameters = {
			address: BANK_PRECOMPILE_ADDRESS,
			abi: BANK_PRECOMPILE_ABI,
			functionName: 'supply',
			args: ['usei']
		};
		try {
			const response = (await publicClient.readContract(params)) as BigInt;
			const supply = formatLargeSeiNumber(response.toString(), 1);
			setSupply(supply);
		} catch (e) {
			console.log(e);
		}
	};

	const renderBankSupplyExample = () => {
		return (
			<div className="card">
				<div className="card-header">
					<p className="card__title">Total Sei supply</p>
					<small className="card__description">
						<a href="https://www.docs.sei.io/dev-interoperability/precompiles/bank" target="_blank">
							{' '}
							Bank precompile
						</a>{' '}
						example for querying native Sei modules
					</small>
				</div>
				<div className="card-body">
					<div className="content-background space-between">
						<small>SEI</small>
						<p>{supply}</p>
					</div>
				</div>
				<div className="card-footer">
					<button onClick={getBankSupply}>Fetch supply</button>
				</div>
			</div>
		);
	};

	// Fetch count of a CosmWasm Contract using WASM Precompile
	const fetchCount = async () => {
		if (!publicClient) {
			return;
		}

		const COUNTER_CONTRACT_ADDRESS = 'sei14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sh9m79m';

		const queryMsg = toHex(JSON.stringify({ get_count: {} }));

		const params: ReadContractParameters = {
			address: WASM_PRECOMPILE_ADDRESS,
			abi: WASM_PRECOMPILE_ABI,
			functionName: 'query',
			args: [COUNTER_CONTRACT_ADDRESS, queryMsg]
		};
		try {
			const response = (await publicClient?.readContract(params)) as `0x${string}`;
			const { count } = JSON.parse(fromHex(response, 'string'));
			setCount(count);
		} catch (e) {
			console.log(e);
		}
	};

	// Fetch count of a CosmWasm Contract using WASM Precompile
	const incrementCounter = async () => {
		if (!address || !publicClient) {
			return;
		}

		const COUNTER_CONTRACT_ADDRESS = 'sei14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sh9m79m';

		const execMsg = toHex(JSON.stringify({ increment: {} }));
		const coins = toHex('[]');
		const params = {
			account: address,
			address: WASM_PRECOMPILE_ADDRESS,
			abi: WASM_PRECOMPILE_ABI,
			functionName: 'execute',
			args: [COUNTER_CONTRACT_ADDRESS, execMsg, coins],
			value: parseEther('0')
		};

		try {
			const estimatedGas = await publicClient.estimateContractGas(params);

			// Call smart contract execute msg
			await writeContractAsync({ ...params, gas: estimatedGas });

			// Wait for 1 block to confirm transaction
			setTimeout(() => {}, 400);
			await fetchCount();
		} catch (error) {
			console.log(error);
		}
	};

	const renderCounterContractExample = () => {
		return (
			<div className="card">
				<div className="card-header">
					<p className="card__title">Smart contract interaction</p>
					<small>
						<a href="https://www.docs.sei.io/dev-interoperability/precompiles/cosmwasm" target="_blank">
							WASM Precompile
						</a>{' '}
						example of CosmWasm smart contract interaction
					</small>
				</div>
				<div className="card-body">
					<div className="content-background space-between">
						<small>Count</small>
						<p>{count}</p>
						<button className="small outline" onClick={incrementCounter}>
							Increase
						</button>
					</div>
				</div>
				<div className="card-footer">
					<button onClick={fetchCount}>Fetch count</button>
				</div>
			</div>
		);
	};

	return (
		<div className="container">
			<div className="grid">
				{/* First card */}
				{renderAddressExample()}

				{/* Second card */}
				{renderBalanceExample()}

				{/* Third card */}
				{renderBankSupplyExample()}

				{/* Fourth card */}
				{renderCounterContractExample()}
			</div>
		</div>
	);
}

export default Examples;
