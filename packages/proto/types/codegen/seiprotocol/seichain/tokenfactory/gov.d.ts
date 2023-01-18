import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AddCreatorsToDenomFeeWhitelistProposal {
    title: string;
    description: string;
    creatorList: string[];
}
export interface AddCreatorsToDenomFeeWhitelistProposalSDKType {
    title: string;
    description: string;
    creatorList: string[];
}
export declare const AddCreatorsToDenomFeeWhitelistProposal: {
    encode(message: AddCreatorsToDenomFeeWhitelistProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCreatorsToDenomFeeWhitelistProposal;
    fromPartial(object: DeepPartial<AddCreatorsToDenomFeeWhitelistProposal>): AddCreatorsToDenomFeeWhitelistProposal;
};
