import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomSDKType {
    sender: string;
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
    new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
    sender: string;
    amount: Coin;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
    sender: string;
    amount: CoinSDKType;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseSDKType {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount: Coin;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
    sender: string;
    amount: CoinSDKType;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseSDKType {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
    sender: string;
    denom: string;
    new_admin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseSDKType {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(message: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgChangeAdmin: {
    encode(message: MsgChangeAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdmin;
    fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin;
};
export declare const MsgChangeAdminResponse: {
    encode(_: MsgChangeAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdminResponse;
    fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
};
