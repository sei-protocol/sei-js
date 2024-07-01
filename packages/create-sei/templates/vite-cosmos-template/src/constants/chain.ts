import { ARCTIC_1_SEI_COSMOS_KIT_CHAIN, ATLANTIC_2_SEI_COSMOS_KIT_CHAIN, PACIFIC_1_SEI_COSMOS_KIT_CHAIN } from '@sei-js/cosmjs';

export type Urls = {
    rpc: string,
    rest: string,
}

export const defaultUrls: {[chainName: string]: Urls} = {
    [PACIFIC_1_SEI_COSMOS_KIT_CHAIN.chain_id]: {rpc: "https://rpc.sei-apis.com", rest: 'https://rest-arctic-1.sei-apis.com'},
    [ATLANTIC_2_SEI_COSMOS_KIT_CHAIN.chain_id]: {rpc: "https://rpc-testnet.sei-apis.com", rest: "https://rest-testnet.sei-apis.com"},
    [ARCTIC_1_SEI_COSMOS_KIT_CHAIN.chain_id]: {rpc: "https://rpc-arctic-1.sei-apis.com", rest: "https://rest-arctic-1.sei-apis.com"}
}

// Set your selected chain here
// To point to mainnet, use PACIFIC_1_SEI_COSMOS_KIT_CHAIN
export const selectedChain = ARCTIC_1_SEI_COSMOS_KIT_CHAIN