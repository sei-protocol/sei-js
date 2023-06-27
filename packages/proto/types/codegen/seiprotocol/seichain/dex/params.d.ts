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
    minRentDeposit: Long;
    gasAllowancePerSettlement: Long;
    minProcessableRent: Long;
    orderBookEntriesPerLoad: Long;
    contractUnsuspendCost: Long;
    maxOrderPerPrice: Long;
    maxPairsPerContract: Long;
    defaultGasPerOrderDataByte: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    price_snapshot_retention: Long;
    sudo_call_gas_price: string;
    begin_block_gas_limit: Long;
    end_block_gas_limit: Long;
    default_gas_per_order: Long;
    default_gas_per_cancel: Long;
    min_rent_deposit: Long;
    gas_allowance_per_settlement: Long;
    min_processable_rent: Long;
    order_book_entries_per_load: Long;
    contract_unsuspend_cost: Long;
    max_order_per_price: Long;
    max_pairs_per_contract: Long;
    default_gas_per_order_data_byte: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
