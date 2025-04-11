import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import type {
	MsgSubmitEvidenceResponse as MsgSubmitEvidenceResponse_type,
	MsgSubmitEvidence as MsgSubmitEvidence_type
} from "../../../../types/cosmos/evidence/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface MsgSubmitEvidence extends MsgSubmitEvidence_type {}
export interface MsgSubmitEvidenceResponse extends MsgSubmitEvidenceResponse_type {}

export const MsgSubmitEvidence: MessageFns<MsgSubmitEvidence, "cosmos.evidence.v1beta1.MsgSubmitEvidence"> = {
	$type: "cosmos.evidence.v1beta1.MsgSubmitEvidence" as const,

	encode(message: MsgSubmitEvidence, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.submitter !== "") {
			writer.uint32(10).string(message.submitter);
		}
		if (message.evidence !== undefined) {
			Any.encode(message.evidence, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidence {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSubmitEvidence();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.submitter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.evidence = Any.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgSubmitEvidence {
		return {
			submitter: isSet(object.submitter) ? globalThis.String(object.submitter) : "",
			evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : undefined
		};
	},

	toJSON(message: MsgSubmitEvidence): unknown {
		const obj: any = {};
		if (message.submitter !== "") {
			obj.submitter = message.submitter;
		}
		if (message.evidence !== undefined) {
			obj.evidence = Any.toJSON(message.evidence);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSubmitEvidence>, I>>(base?: I): MsgSubmitEvidence {
		return MsgSubmitEvidence.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSubmitEvidence>, I>>(object: I): MsgSubmitEvidence {
		const message = createBaseMsgSubmitEvidence();
		message.submitter = object.submitter ?? "";
		message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
		return message;
	}
};

export const MsgSubmitEvidenceResponse: MessageFns<MsgSubmitEvidenceResponse, "cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse"> = {
	$type: "cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse" as const,

	encode(message: MsgSubmitEvidenceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.hash.length !== 0) {
			writer.uint32(34).bytes(message.hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidenceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSubmitEvidenceResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 4:
					if (tag !== 34) {
						break;
					}

					message.hash = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgSubmitEvidenceResponse {
		return { hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0) };
	},

	toJSON(message: MsgSubmitEvidenceResponse): unknown {
		const obj: any = {};
		if (message.hash.length !== 0) {
			obj.hash = base64FromBytes(message.hash);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSubmitEvidenceResponse>, I>>(base?: I): MsgSubmitEvidenceResponse {
		return MsgSubmitEvidenceResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSubmitEvidenceResponse>, I>>(object: I): MsgSubmitEvidenceResponse {
		const message = createBaseMsgSubmitEvidenceResponse();
		message.hash = object.hash ?? new Uint8Array(0);
		return message;
	}
};

function createBaseMsgSubmitEvidence(): MsgSubmitEvidence {
	return { submitter: "", evidence: undefined };
}

function createBaseMsgSubmitEvidenceResponse(): MsgSubmitEvidenceResponse {
	return { hash: new Uint8Array(0) };
}

function bytesFromBase64(b64: string): Uint8Array {
	if ((globalThis as any).Buffer) {
		return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	} else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) {
			arr[i] = bin.charCodeAt(i);
		}
		return arr;
	}
}

function base64FromBytes(arr: Uint8Array): string {
	if ((globalThis as any).Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.evidence.v1beta1.MsgSubmitEvidence", MsgSubmitEvidence as never],
	["/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse", MsgSubmitEvidenceResponse as never]
];
export const aminoConverters = {
	"/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
		aminoType: "cosmos-sdk/MsgSubmitEvidence",
		toAmino: (message: MsgSubmitEvidence) => ({ ...message }),
		fromAmino: (object: MsgSubmitEvidence) => ({ ...object })
	},

	"/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse": {
		aminoType: "cosmos-sdk/MsgSubmitEvidenceResponse",
		toAmino: (message: MsgSubmitEvidenceResponse) => ({ ...message }),
		fromAmino: (object: MsgSubmitEvidenceResponse) => ({ ...object })
	}
};
