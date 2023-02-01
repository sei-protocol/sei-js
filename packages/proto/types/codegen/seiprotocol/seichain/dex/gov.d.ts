import { BatchContractPair, BatchContractPairSDKType } from "./pair";
import { TickSize, TickSizeSDKType } from "./tick_size";
import { AssetMetadata, AssetMetadataSDKType } from "./asset_list";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * RegisterPairsProposal is a gov Content type for adding a new whitelisted token
 * pair to the dex module. It must specify a list of contract addresses and their respective
 * token pairs to be registered.
 */
export interface RegisterPairsProposal {
    title: string;
    description: string;
    batchcontractpair: BatchContractPair[];
}
/**
 * RegisterPairsProposal is a gov Content type for adding a new whitelisted token
 * pair to the dex module. It must specify a list of contract addresses and their respective
 * token pairs to be registered.
 */
export interface RegisterPairsProposalSDKType {
    title: string;
    description: string;
    batchcontractpair: BatchContractPairSDKType[];
}
export interface UpdateTickSizeProposal {
    title: string;
    description: string;
    tickSizeList: TickSize[];
}
export interface UpdateTickSizeProposalSDKType {
    title: string;
    description: string;
    tickSizeList: TickSizeSDKType[];
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface AddAssetMetadataProposal {
    title: string;
    description: string;
    assetList: AssetMetadata[];
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface AddAssetMetadataProposalSDKType {
    title: string;
    description: string;
    assetList: AssetMetadataSDKType[];
}
export declare const RegisterPairsProposal: {
    encode(message: RegisterPairsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPairsProposal;
    fromPartial(object: DeepPartial<RegisterPairsProposal>): RegisterPairsProposal;
};
export declare const UpdateTickSizeProposal: {
    encode(message: UpdateTickSizeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTickSizeProposal;
    fromPartial(object: DeepPartial<UpdateTickSizeProposal>): UpdateTickSizeProposal;
};
export declare const AddAssetMetadataProposal: {
    encode(message: AddAssetMetadataProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAssetMetadataProposal;
    fromPartial(object: DeepPartial<AddAssetMetadataProposal>): AddAssetMetadataProposal;
};
