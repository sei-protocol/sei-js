// @ts-nocheck
import './App.css';

import { WalletConnectButton } from './components/WalletConnectButton';
import { useAccount } from 'wagmi';

type HelpItem = {
	title: string;
	description: string;
	link: string;
};

function App() {
	const { address } = useAccount();

	const renderHelpItem = ({ title, description, link }: HelpItem) => {
		return (
			<a href={link} target='_blank' rel='noopener noreferrer' className='bg-white text-red-500 shadow-md rounded-lg p-6 hover:bg-gray-50 w-full'>
				<h2 className='text-lg font-semibold'>{title}</h2>
				<p className='text-black'>{description}</p>
			</a>
		);
	};

	return (
		<div className='min-h-screen flex flex-col justify-between items-center'>
			<div className='flex flex-row items-center justify-between gap-4 p-4 w-full'>
				<img src='https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg' alt='Sei Logo' className='w-8 h-8' />
				<WalletConnectButton />
			</div>
			<div className='flex flex-col items-center justify-center flex-1 p-8 w-full max-w-[680px]'>
				<div className='flex flex-col gap-8 w-full'>
					<div>
						<h1 className='text-4xl font-bold mb-2'>Welcome to Sei</h1>
					</div>
					<div className='flex flex-col gap-8 p-4 rounded bg-neutral-700'>
						<div className='flex flex-col items-start gap-2 w-full bg-neutral-800 rounded p-4'>
							<p>Wallet address</p>
							<strong className='break-words max-w-full'>{address ? address : '---'}</strong>
						</div>
						<WalletConnectButton />
					</div>
					<p className='mb-8'>
						Get started by editing <code className='bg-gray-200 text-sm rounded p-1 text-black'>src/App.tsx</code>
					</p>
				</div>

				<div className='flex flex-col gap-4 flex justify-center items-center'>
					{renderHelpItem({ title: 'Sei Docs', description: 'Find in-depth information about Sei.', link: 'https://docs.sei.io/' })}
					{renderHelpItem({
						title: 'Wagmi',
						description: "Learn about Wagmi and it's hooks for chain interaction.",
						link: 'https://wagmi.sh/'
					})}
					{renderHelpItem({
						title: 'Viem',
						description: 'Interact with Sei using Viem modules + Wagmi.',
						link: 'https://viem.sh/'
					})}
					{renderHelpItem({
						title: 'EVM JSON-RPC API',
						description: 'Learn about the EVM api available on Sei.',
						link: 'https://ethereum.org/en/developers/docs/apis/json-rpc/'
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
