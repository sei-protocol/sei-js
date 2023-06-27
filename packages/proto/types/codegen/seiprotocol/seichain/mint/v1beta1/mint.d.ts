import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the most recent */
export interface Minter {
    /** yyyy-mm-dd */
    startDate: string;
    /** yyyy-mm-dd */
    endDate: string;
    denom: string;
    totalMintAmount: Long;
    remainingMintAmount: Long;
    lastMintAmount: Long;
    lastMintDate: string;
    /** yyyy-mm-dd */
    lastMintHeight: Long;
}
/** Minter represents the most recent */
export interface MinterSDKType {
    start_date: string;
    end_date: string;
    denom: string;
    total_mint_amount: Long;
    remaining_mint_amount: Long;
    last_mint_amount: Long;
    last_mint_date: string;
    last_mint_height: Long;
}
export interface ScheduledTokenRelease {
    /** yyyy-mm-dd */
    startDate: string;
    /** yyyy-mm-dd */
    endDate: string;
    tokenReleaseAmount: Long;
}
export interface ScheduledTokenReleaseSDKType {
    start_date: string;
    end_date: string;
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
    mint_denom: string;
    token_release_schedule: ScheduledTokenReleaseSDKType[];
}
/** Minter represents the most recent */
export interface Version2Minter {
    lastMintAmount: string;
    lastMintDate: string;
    lastMintHeight: Long;
    denom: string;
}
/** Minter represents the most recent */
export interface Version2MinterSDKType {
    last_mint_amount: string;
    last_mint_date: string;
    last_mint_height: Long;
    denom: string;
}
export interface Version2ScheduledTokenRelease {
    /** yyyy-mm-dd */
    date: string;
    tokenReleaseAmount: Long;
}
export interface Version2ScheduledTokenReleaseSDKType {
    date: string;
    token_release_amount: Long;
}
/** Params holds parameters for the mint module. */
export interface Version2Params {
    /** type of coin to mint */
    mintDenom: string;
    /** List of token release schedules */
    tokenReleaseSchedule: Version2ScheduledTokenRelease[];
}
/** Params holds parameters for the mint module. */
export interface Version2ParamsSDKType {
    mint_denom: string;
    token_release_schedule: Version2ScheduledTokenReleaseSDKType[];
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
export declare const Version2Minter: {
    encode(message: Version2Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version2Minter;
    fromPartial(object: DeepPartial<Version2Minter>): Version2Minter;
};
export declare const Version2ScheduledTokenRelease: {
    encode(message: Version2ScheduledTokenRelease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version2ScheduledTokenRelease;
    fromPartial(object: DeepPartial<Version2ScheduledTokenRelease>): Version2ScheduledTokenRelease;
};
export declare const Version2Params: {
    encode(message: Version2Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version2Params;
    fromPartial(object: DeepPartial<Version2Params>): Version2Params;
};
