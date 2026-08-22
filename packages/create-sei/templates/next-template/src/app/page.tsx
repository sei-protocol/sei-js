"use client";

import { useAccount } from "wagmi";
import { Default, Landing, Shell } from "@/components";

export default function Home() {
	const { isConnected } = useAccount();

	return <Shell>{isConnected ? <Default /> : <Landing />}</Shell>;
}
