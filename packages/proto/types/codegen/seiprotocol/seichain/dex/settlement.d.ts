import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SettlementEntry {
    account: string;
    priceDenom: string;
    assetDenom: string;
    quantity: string;
    executionCostOrProceed: string;
    expectedCostOrProceed: string;
    positionDirection: string;
    orderType: string;
    orderId: Long;
    timestamp: Long;
    height: Long;
    settlementId: Long;
}
export interface SettlementEntrySDKType {
    account: string;
    priceDenom: string;
    assetDenom: string;
    quantity: string;
    executionCostOrProceed: string;
    expectedCostOrProceed: string;
    positionDirection: string;
    orderType: string;
    orderId: Long;
    timestamp: Long;
    height: Long;
    settlementId: Long;
}
export interface Settlements {
    epoch: Long;
    entries: SettlementEntry[];
}
export interface SettlementsSDKType {
    epoch: Long;
    entries: SettlementEntrySDKType[];
}
export declare const SettlementEntry: {
    encode(message: SettlementEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SettlementEntry;
    fromPartial(object: DeepPartial<SettlementEntry>): SettlementEntry;
};
export declare const Settlements: {
    encode(message: Settlements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Settlements;
    fromPartial(object: DeepPartial<Settlements>): Settlements;
};
