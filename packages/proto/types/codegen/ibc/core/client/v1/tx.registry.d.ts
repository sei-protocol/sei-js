import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: MsgCreateClient;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: MsgUpdateClient;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: MsgUpgradeClient;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: MsgSubmitMisbehaviour;
        };
    };
    fromPartial: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: MsgCreateClient;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: MsgUpdateClient;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: MsgUpgradeClient;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: MsgSubmitMisbehaviour;
        };
    };
};
