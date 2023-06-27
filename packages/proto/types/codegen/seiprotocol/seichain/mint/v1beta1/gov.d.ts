import { Minter, MinterSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposal {
    title: string;
    description: string;
    minter: Minter;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposalSDKType {
    title: string;
    description: string;
    minter: MinterSDKType;
}
export declare const UpdateMinterProposal: {
    encode(message: UpdateMinterProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMinterProposal;
    fromPartial(object: DeepPartial<UpdateMinterProposal>): UpdateMinterProposal;
};
