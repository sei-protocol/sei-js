'use client';

import { Default, Landing, Shell } from '@/components';
import { useAccount } from 'wagmi';

export default function Home() {
	const { isConnected } = useAccount();

	return <Shell>{isConnected ? <Default /> : <Landing />}</Shell>;
}
