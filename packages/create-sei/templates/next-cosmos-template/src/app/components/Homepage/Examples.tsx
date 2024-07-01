import { getCosmWasmClient, getQueryClient, getSigningCosmWasmClient, getStargateClient } from "@sei-js/cosmjs";
import { useState } from "react";
import { defaultUrls, selectedChain } from "../../constants";
import { useChain } from "@cosmos-kit/react";
import styles from './Components.module.css'

type ExampleProps = {
    chainId: string
}

function Examples({ chainId }: ExampleProps) {
    const [balance, setBalance] = useState(0)
    const [pool, setPool] = useState({ bonded_tokens: 0, not_bonded_tokens: 0 });
    const [count, setCount] = useState(0)

    const { address, isWalletConnected, getOfflineSignerAmino } = useChain(selectedChain.chain_name);

    // Example of using the query client to query Sei modules
    const getStakingPool = async () => {
        const queryClient = await getQueryClient(defaultUrls[chainId].rest);
        const result = await queryClient.cosmos.staking.v1beta1.pool({});
        setPool(result.pool)
    }

    const getStakingPoolExample = () => {
        return (
            isWalletConnected ?
                <div className={styles.exampleContainer}>
                    <b className={styles.walletAddressLabel}>Staking Pool</b>
                    <p>Example of using the <br/>
                        <a className={styles.link}
                        href="https://sei-protocol.github.io/sei-js/functions/cosmjs.getQueryClient.html"
                        target="_blank">
                            Sei QueryClient
                        </a>
                    <br/> to query the chain directly.</p>
                    <button className={styles.exampleButton} onClick={getStakingPool}>Get Staking Pool</button>
                    <div className={styles.row}>
                        <p>Bonded Tokens</p>
                        <strong className={styles.walletAddressLabel}>{pool.bonded_tokens || '---'}</strong>
                        <br />
                        <p>Unbonded Tokens</p>
                        <strong className={styles.walletAddressLabel}>{pool.not_bonded_tokens || '---'}</strong>
                    </div>
                </div> :
                <></>
        )
    }

    const getBalanceStargate = async () => {
        if (!address) {
            return undefined
        }
        console.log(defaultUrls);
        const queryClient = await getStargateClient(defaultUrls[chainId].rpc);
        const useiBalance = await queryClient.getBalance(address, 'usei');
        const seiBalance = Number(useiBalance.amount) / 1000000
        setBalance(seiBalance);
    }

    const getBalanceExample = () => {
        return (
            isWalletConnected ?
                <div className={styles.exampleContainer}>
                    <b className={styles.walletAddressLabel}>Wallet Balance</b>
                    <p>Example of using the <br/>
                    <a
                        className={styles.link}
                        href="https://cosmos.github.io/cosmjs/latest/stargate/classes/StargateClient.html"
                        target="_blank">
                            Stargate Client
                    </a>
                    <br/> to query the chain directly.</p>
                    <button className={styles.exampleButton} onClick={getBalanceStargate}>Get Balance</button>
                    <div className={styles.row}>
                        <p>Wallet Balance</p>
                        <strong className={styles.walletAddressLabel}>{balance || '---'}</strong>
                    </div>
                </div> :
                <></>
        )
    }

    const fetchCount = async () => {
        const cosmWasmClient = await getCosmWasmClient(defaultUrls[chainId].rpc);
        console.log(cosmWasmClient);
        const CONTRACT_ADDRESS =
            "sei14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sh9m79m";
        const response = await cosmWasmClient.queryContractSmart(CONTRACT_ADDRESS, {
          get_count: {},
        });
        const result = response?.count;
        if (result) {
            setCount(result);
        }
    }

    const incrementCounter = async () => {
        if (!address) {
            return;
        }
        const offlineSigner = await getOfflineSignerAmino();
        const signingCosmWasmClient = await getSigningCosmWasmClient(
            defaultUrls[chainId].rpc,
            offlineSigner
        )

        try {
            const senderAddress = address;
            const CONTRACT_ADDRESS =
                "sei14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sh9m79m";

            // Build message content
            const msg = { increment: {} };

            // Define gas price and limit
            const fee = {
                amount: [{ amount: "20000", denom: "usei" }],
                gas: "200000",
            };

            // Call smart contract execute msg
            await signingCosmWasmClient?.execute(senderAddress, CONTRACT_ADDRESS, msg, fee);

            await fetchCount();

        } catch (error) {
            console.log(error)
        }
    };

    const counterContractExample = () => {
        return (
            isWalletConnected ?
            <div className={styles.exampleContainer}>
                <b className={styles.walletAddressLabel}>Counter Smart Contract</b>
                <p>Example of using <br/>
                <a
                    className={styles.link}
                    href="https://cosmos.github.io/cosmjs/latest/stargate/classes/SigningCosmWasmClient.html"
                    target="_blank">
                        CosmWasm Clients
                    </a>
                <br/> to interact with a smart contract. </p>
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
            {getStakingPoolExample()}
            {counterContractExample()}
        </div>
    )
}

export default Examples;