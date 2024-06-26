import { useState } from "react";
import styles from './Components.module.css'
import { useAccount, useWriteContract } from "wagmi";
import { usePublicClient } from "wagmi";
import { formatEther, fromHex, parseEther, toHex } from "viem";
import { BANK_PRECOMPILE_ABI, BANK_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, WASM_PRECOMPILE_ADDRESS } from "@sei-js/evm";
import { ReadContractParameters } from "wagmi/actions";

function Examples() {
    const [balance, setBalance] = useState('')
    const [supply, setSupply] = useState('');
    const [count, setCount] = useState(0)
    const publicClient = usePublicClient();

	const { isConnected, address } = useAccount();
	const { writeContractAsync } = useWriteContract();

    const formatLargeSeiNumber = (num: string, decimals: number): string => {
		if (num.length > 10) {
			return (Number(num) / 1000000 / 1000000000).toLocaleString(navigator.language, { minimumFractionDigits: decimals, maximumFractionDigits: decimals}) + ' B';
		} else {
			return (Number(num) / 1000000).toLocaleString(navigator.language);
		}
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
        }
        try {
            const response = await publicClient?.readContract(params) as BigInt;
            const supply = formatLargeSeiNumber(response.toString(), 1)
            setSupply(supply);
        } catch (e) {
            console.log(e);
        }
    }

    const getBankSupplyExample = () => {
        return (
            isConnected ?
                <div className={styles.exampleContainer}>
                    <b className={styles.walletAddressLabel}>Total Supply</b>
                    <p>Example of using the <br/>
                        <a className={styles.link}
                        href="https://www.docs.sei.io/dev-interoperability/precompiles/bank"
                        target="_blank">
                            Bank Precompile
                        </a>
                    <br/> to query native Sei modules.</p>
                    <button className={styles.exampleButton} onClick={getBankSupply}>Get Sei Supply</button>
                    <div className={styles.row}>
                        <p>Total Supply</p>
                        <strong className={styles.walletAddressLabel}>{supply || '---'}</strong>
                    </div>
                </div> :
                <></>
        )
    }

    const getBalanceWagmi = async () => {
        if (!address || !publicClient) {
            return undefined
        }
        const weiBalance = await publicClient.getBalance({address});
        const seiBalance = formatEther(weiBalance)
        setBalance(seiBalance);
    }

    const getBalanceExample = () => {
        return (
            isConnected ?
                <div className={styles.exampleContainer}>
                    <b className={styles.walletAddressLabel}>Wallet Balance</b>
                    <p>Example of using the <br/>
                    <a
                        className={styles.link}
                        href="https://viem.sh/docs/clients/public.html"
                        target="_blank">
                            Viem Public Client
                    </a>
                    <br/> to query the chain directly.</p>
                    <button className={styles.exampleButton} onClick={getBalanceWagmi}>Get Balance</button>
                    <div className={styles.row}>
                        <p>Wallet Balance</p>
                        <strong className={styles.walletAddressLabel}>{balance || '---'}</strong>
                    </div>
                </div> :
                <></>
        )
    }

    // Fetch count of a CosmWasm Contract using WASM Precompile
    const fetchCount = async () => {
        if (!publicClient) {
            return;
        }

        const COUNTER_CONTRACT_ADDRESS =
            "sei14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sh9m79m";

        const queryMsg = toHex(JSON.stringify({ get_count: {} }));

        const params: ReadContractParameters = {
            address: WASM_PRECOMPILE_ADDRESS,
            abi: WASM_PRECOMPILE_ABI,
            functionName: 'query',
            args: [COUNTER_CONTRACT_ADDRESS, queryMsg]
        }
        try {
            const response = await publicClient?.readContract(params) as `0x${string}`;
            const { count } = JSON.parse(fromHex(response, 'string'));
            setCount(count);
        } catch (e) {
            console.log(e);
        }
    }

    // Fetch count of a CosmWasm Contract using WASM Precompile
    const incrementCounter = async () => {
        if (!address || !publicClient) {
            return;
        }
        
        const COUNTER_CONTRACT_ADDRESS =
            "sei14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sh9m79m";
        
        const execMsg = toHex(JSON.stringify({ increment: {} }));
        const coins = toHex('[]')
        const params = {
            account: address,
            address: WASM_PRECOMPILE_ADDRESS,
            abi: WASM_PRECOMPILE_ABI,
            functionName: 'execute',
            args: [COUNTER_CONTRACT_ADDRESS, execMsg, coins],
            value: parseEther('0')
        }

        try {
		    const estimatedGas = await publicClient.estimateContractGas(params);

            // Call smart contract execute msg
            await writeContractAsync({ ...params, gas: estimatedGas});

            await fetchCount();

        } catch (error) {
            console.log(error)
        }
    };

    const counterContractExample = () => {
        return (
            isConnected ?
            <div className={styles.exampleContainer}>
                <b className={styles.walletAddressLabel}>Counter Smart Contract</b>
                <p>Example of using <br/>
                <a
                    className={styles.link}
                    href="https://www.docs.sei.io/dev-interoperability/precompiles/cosmwasm"
                    target="_blank">
                        WASM Precompile
                    </a>
                <br/> to interact with a CosmWasm smart contract. </p>
                <div className={styles.row}>
                    <button className={styles.exampleButton} onClick={fetchCount}>Fetch Count</button>
                    <button className={styles.exampleButton} onClick={incrementCounter}>Increment Counter</button>
                </div>
                <div className={styles.row}>
                    <p>Counter</p>
                    <strong className={styles.walletAddressLabel}>{count || '---'}</strong>
                </div>
            </div> :
            <></>
        )
    }

    return (
        <div className={styles.row}>
            {getBalanceExample()}
            {getBankSupplyExample()}
            {counterContractExample()}
        </div>
    )
}

export default Examples;