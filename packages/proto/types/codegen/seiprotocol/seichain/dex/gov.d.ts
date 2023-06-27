import { AssetMetadata, AssetMetadataSDKType } from "./asset_list";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
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
export declare const AddAssetMetadataProposal: {
    encode(message: AddAssetMetadataProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAssetMetadataProposal;
    fromPartial(object: DeepPartial<AddAssetMetadataProposal>): AddAssetMetadataProposal;
};
