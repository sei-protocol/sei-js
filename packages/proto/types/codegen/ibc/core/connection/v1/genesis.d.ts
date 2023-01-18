import { IdentifiedConnection, IdentifiedConnectionSDKType, ConnectionPaths, ConnectionPathsSDKType, Params, ParamsSDKType } from "./connection";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
    connections: IdentifiedConnection[];
    clientConnectionPaths: ConnectionPaths[];
    /** the sequence for the next generated connection identifier */
    nextConnectionSequence: Long;
    params: Params;
}
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisStateSDKType {
    connections: IdentifiedConnectionSDKType[];
    client_connection_paths: ConnectionPathsSDKType[];
    /** the sequence for the next generated connection identifier */
    next_connection_sequence: Long;
    params: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
