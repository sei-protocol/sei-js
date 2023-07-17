import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the paramaters of the module. */
    params: Params;
    factoryDenoms: GenesisDenom[];
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
    denom: string;
    authorityMetadata: DenomAuthorityMetadata;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
    denom: string;
    authority_metadata: DenomAuthorityMetadataSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisDenom: {
    encode(message: GenesisDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDenom;
    fromPartial(object: DeepPartial<GenesisDenom>): GenesisDenom;
};
