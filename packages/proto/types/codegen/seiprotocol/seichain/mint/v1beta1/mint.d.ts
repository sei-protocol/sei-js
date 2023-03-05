import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Minter represents the most recent */
export interface Minter {
    lastMintAmount: string;
    lastMintDate: string;
    lastMintHeight: Long;
    denom: string;
}
/** Minter represents the most recent */
export interface MinterSDKType {
    last_mint_amount: string;
    last_mint_date: string;
    last_mint_height: Long;
    denom: string;
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
    /** List of token release schedules */
    tokenReleaseSchedule: ScheduledTokenRelease[];
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    /** type of coin to mint */
    mint_denom: string;
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
