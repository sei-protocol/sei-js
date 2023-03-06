import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRecordTransactionData, MsgSubmitFraudChallenge } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        recordTransactionData(value: MsgRecordTransactionData): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitFraudChallenge(value: MsgSubmitFraudChallenge): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        recordTransactionData(value: MsgRecordTransactionData): {
            typeUrl: string;
            value: MsgRecordTransactionData;
        };
        submitFraudChallenge(value: MsgSubmitFraudChallenge): {
            typeUrl: string;
            value: MsgSubmitFraudChallenge;
        };
    };
    fromPartial: {
        recordTransactionData(value: MsgRecordTransactionData): {
            typeUrl: string;
            value: MsgRecordTransactionData;
        };
        submitFraudChallenge(value: MsgSubmitFraudChallenge): {
            typeUrl: string;
            value: MsgSubmitFraudChallenge;
        };
    };
};
