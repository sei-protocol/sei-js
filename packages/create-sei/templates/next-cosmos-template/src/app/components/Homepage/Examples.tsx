import { getCosmWasmClient, getQueryClient, getSigningCosmWasmClient, getStargateClient } from "@sei-js/cosmjs";
import { useState } from "react";
import { defaultUrls, selectedChain } from "../../constants";
import { useChain } from "@cosmos-kit/react";

import './Homepage.css'
type ExampleProps = {
    chainId: string
}

function Examples({ chainId }: ExampleProps) {
    const [balance, setBalance] = useState(0)
    const [pool, setPool] = useState({ bonded_tokens: 0, not_bonded_tokens: 0 });
    const [count, setCount] = useState(0)

    const { address, getOfflineSignerAmino } = useChain(selectedChain.chain_name);

    // Example of using the query client to query Sei modules
    const getStakingPool = async () => {
        const queryClient = await getQueryClient(defaultUrls[chainId].rest);
        const result = await queryClient.cosmos.staking.v1beta1.pool({});
        setPool(result.pool)
    }
    
    const renderStakingPoolExample = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <p className="card__title">Staking Pool</p>
                    <small className="card__description">
                        <a 
                        href="https://sei-protocol.github.io/sei-js/functions/cosmjs.getQueryClient.html"
                        target="_blank">Sei QueryClient</a> query example
                    </small>
                </div>
                <div className="card-body">
                    <div className="content-background space-between">
                        <small>Bonded Tokens</small>
                        <p>{pool ? pool.bonded_tokens : '---'} SEI</p>
                    </div>
                    <div className="content-background space-between">
                        <small>Unbonded Tokens</small>
                        <p>{pool ? pool.not_bonded_tokens : '---'} SEI</p>
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={getStakingPool}>Fetch Staking Data</button>
                </div>
            </div>
        )
    }

    const getBalanceStargate = async () => {
        if (!address) {
            return undefined
        }
        const queryClient = await getStargateClient(defaultUrls[chainId].rpc);
        const useiBalance = await queryClient.getBalance(address, 'usei');
        const seiBalance = Number(useiBalance.amount) / 1000000
        setBalance(seiBalance);
    }

    const renderBalanceExample = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <p className="card__title">Wallet Balance</p>
                    <small className="card__description">
                        <a 
                        href="https://cosmos.github.io/cosmjs/latest/stargate/classes/StargateClient.html"
                        target="_blank">Stargate Client</a> query example
                    </small>
                </div>
                <div className="card-body">
                    <div className="content-background space-between">
                        <small>SEI</small>
                        <p>{balance ? balance : '---' } SEI</p>
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={getBalanceStargate}>Fetch balance</button>
                </div>
            </div>
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

    const renderCounterContractExample = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <p className="card__title">Smart contract interaction</p>
                    <small>
                        <a
                        href="https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html"
                        target="_blank">
                            CosmWasm Clients
                        </a> example of smart
                        contract interaction
                    </small>
                </div>
                <div className="card-body">
                    <div className="content-background space-between">
                        <small>Count</small>
                        <p>{count}</p>
                        <button
                            className="small outline"
                            onClick={incrementCounter}
                        >
                            Increase
                        </button>
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={fetchCount}>Fetch count</button>
                </div>
            </div>
        )
    }

    return (
        <div className="grid">
            {renderBalanceExample()}
            {renderStakingPoolExample()}
            {renderCounterContractExample()}
        </div>
    )
}

export default Examples;