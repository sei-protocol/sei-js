import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: Uint8Array;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: MsgChangeAdmin;
        };
    };
    fromPartial: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: MsgChangeAdmin;
        };
    };
};
