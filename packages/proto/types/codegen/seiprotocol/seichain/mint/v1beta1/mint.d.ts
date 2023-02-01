import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current epoch provisions */
    epochProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    /** current epoch provisions */
    epoch_provisions: string;
}
export interface ScheduledTokenRelease {
    /** yyyy-mm-dd */
    date: string;
    tokenReleaseAmount: Long;
}
export interface ScheduledTokenReleaseSDKType {
    /** yyyy-mm-dd */
    date: string;
    token_release_amount: Long;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** epoch provisions from the first epoch */
    genesisEpochProvisions: string;
    /** List of token release schedules */
    tokenReleaseSchedule: ScheduledTokenRelease[];
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    /** type of coin to mint */
    mint_denom: string;
    /** epoch provisions from the first epoch */
    genesis_epoch_provisions: string;
    /** List of token release schedules */
    token_release_schedule: ScheduledTokenReleaseSDKType[];
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
export declare const ScheduledTokenRelease: {
    encode(message: ScheduledTokenRelease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledTokenRelease;
    fromPartial(object: DeepPartial<ScheduledTokenRelease>): ScheduledTokenRelease;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
