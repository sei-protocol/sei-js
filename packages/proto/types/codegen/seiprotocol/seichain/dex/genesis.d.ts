import { Params, ParamsSDKType } from "./params";
import { LongBook, LongBookSDKType } from "./long_book";
import { ShortBook, ShortBookSDKType } from "./short_book";
import { Twap, TwapSDKType } from "./twap";
import { TickSize, TickSizeSDKType } from "./tick_size";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
    params: Params;
    longBookList: LongBook[];
    shortBookList: ShortBook[];
    twapList: Twap[];
    /** if null, then no restriction, todo(zw) should set it to not nullable? */
    tickSizeList: TickSize[];
    lastEpoch: Long;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    longBookList: LongBookSDKType[];
    shortBookList: ShortBookSDKType[];
    twapList: TwapSDKType[];
    /** if null, then no restriction, todo(zw) should set it to not nullable? */
    tickSizeList: TickSizeSDKType[];
    lastEpoch: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
