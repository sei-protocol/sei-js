import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface AssetIBCInfo {
    sourceChannel: string;
    dstChannel: string;
    sourceDenom: string;
    sourceChainID: string;
}
export interface AssetIBCInfoSDKType {
    sourceChannel: string;
    dstChannel: string;
    sourceDenom: string;
    sourceChainID: string;
}
export interface AssetMetadata {
    ibcInfo: AssetIBCInfo;
    /** Ex: cw20, ics20, erc20 */
    typeAsset: string;
    metadata: Metadata;
}
export interface AssetMetadataSDKType {
    ibcInfo: AssetIBCInfoSDKType;
    type_asset: string;
    metadata: MetadataSDKType;
}
export declare const AssetIBCInfo: {
    encode(message: AssetIBCInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetIBCInfo;
    fromPartial(object: DeepPartial<AssetIBCInfo>): AssetIBCInfo;
};
export declare const AssetMetadata: {
    encode(message: AssetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMetadata;
    fromPartial(object: DeepPartial<AssetMetadata>): AssetMetadata;
};
