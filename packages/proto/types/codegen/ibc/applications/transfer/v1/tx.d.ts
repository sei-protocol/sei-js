import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransfer {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** the tokens to be transferred */
    token: Coin;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: Height;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: Long;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferSDKType {
    /** the port on which the packet will be sent */
    source_port: string;
    /** the channel by which the packet will be sent */
    source_channel: string;
    /** the tokens to be transferred */
    token: CoinSDKType;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeout_height: HeightSDKType;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeout_timestamp: Long;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {
}
export declare const MsgTransfer: {
    encode(message: MsgTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer;
    fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer;
};
export declare const MsgTransferResponse: {
    encode(_: MsgTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse;
    fromPartial(_: DeepPartial<MsgTransferResponse>): MsgTransferResponse;
};
