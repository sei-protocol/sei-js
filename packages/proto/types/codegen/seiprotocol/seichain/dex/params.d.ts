import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    priceSnapshotRetention: Long;
    sudoCallGasPrice: string;
    beginBlockGasLimit: Long;
    endBlockGasLimit: Long;
    defaultGasPerOrder: Long;
    defaultGasPerCancel: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    price_snapshot_retention: Long;
    sudo_call_gas_price: string;
    begin_block_gas_limit: Long;
    end_block_gas_limit: Long;
    default_gas_per_order: Long;
    default_gas_per_cancel: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
