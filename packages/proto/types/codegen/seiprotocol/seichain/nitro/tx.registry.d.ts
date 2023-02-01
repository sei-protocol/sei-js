import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRecordTransactionData } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        recordTransactionData(value: MsgRecordTransactionData): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        recordTransactionData(value: MsgRecordTransactionData): {
            typeUrl: string;
            value: MsgRecordTransactionData;
        };
    };
    fromPartial: {
        recordTransactionData(value: MsgRecordTransactionData): {
            typeUrl: string;
            value: MsgRecordTransactionData;
        };
    };
};
