import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { Coin } from "../../base/v1beta1/coin";

import { WeightedVoteOption, voteOptionFromJSON, voteOptionToJSON } from "./gov";

import type {
	MsgDepositResponse as MsgDepositResponseType,
	MsgDeposit as MsgDepositType,
	MsgSubmitProposalResponse as MsgSubmitProposalResponseType,
	MsgSubmitProposal as MsgSubmitProposalType,
	MsgVoteResponse as MsgVoteResponseType,
	MsgVote as MsgVoteType,
	MsgVoteWeightedResponse as MsgVoteWeightedResponseType,
	MsgVoteWeighted as MsgVoteWeightedType,
} from "../../../../types/cosmos/gov/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface MsgSubmitProposal extends MsgSubmitProposalType {}
interface MsgSubmitProposalResponse extends MsgSubmitProposalResponseType {}
interface MsgVote extends MsgVoteType {}
interface MsgVoteResponse extends MsgVoteResponseType {}
interface MsgVoteWeighted extends MsgVoteWeightedType {}
interface MsgVoteWeightedResponse extends MsgVoteWeightedResponseType {}
interface MsgDeposit extends MsgDepositType {}
interface MsgDepositResponse extends MsgDepositResponseType {}

export const MsgSubmitProposal: MessageFns<MsgSubmitProposal, "cosmos.gov.v1beta1.MsgSubmitProposal"> = {
	$type: "cosmos.gov.v1beta1.MsgSubmitProposal" as const,

	encode(message: MsgSubmitProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.content !== undefined) {
			Any.encode(message.content, writer.uint32(10).fork()).join();
		}
		for (const v of message.initial_deposit) {
			Coin.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.proposer !== "") {
			writer.uint32(26).string(message.proposer);
		}
		if (message.is_expedited !== false) {
			writer.uint32(32).bool(message.is_expedited);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSubmitProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.content = Any.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.initial_deposit.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.proposer = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.is_expedited = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgSubmitProposal {
		return {
			content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
			initial_deposit: globalThis.Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e: any) => Coin.fromJSON(e)) : [],
			proposer: isSet(object.proposer) ? globalThis.String(object.proposer) : "",
			is_expedited: isSet(object.is_expedited) ? globalThis.Boolean(object.is_expedited) : false,
		};
	},

	toJSON(message: MsgSubmitProposal): unknown {
		const obj: any = {};
		if (message.content !== undefined) {
			obj.content = Any.toJSON(message.content);
		}
		if (message.initial_deposit?.length) {
			obj.initial_deposit = message.initial_deposit.map((e) => Coin.toJSON(e));
		}
		if (message.proposer !== "") {
			obj.proposer = message.proposer;
		}
		if (message.is_expedited !== false) {
			obj.is_expedited = message.is_expedited;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(base?: I): MsgSubmitProposal {
		return MsgSubmitProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(object: I): MsgSubmitProposal {
		const message = createBaseMsgSubmitProposal();
		message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
		message.initial_deposit = object.initial_deposit?.map((e) => Coin.fromPartial(e)) || [];
		message.proposer = object.proposer ?? "";
		message.is_expedited = object.is_expedited ?? false;
		return message;
	},
};

export const MsgSubmitProposalResponse: MessageFns<MsgSubmitProposalResponse, "cosmos.gov.v1beta1.MsgSubmitProposalResponse"> = {
	$type: "cosmos.gov.v1beta1.MsgSubmitProposalResponse" as const,

	encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSubmitProposalResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgSubmitProposalResponse {
		return { proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0 };
	},

	toJSON(message: MsgSubmitProposalResponse): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(base?: I): MsgSubmitProposalResponse {
		return MsgSubmitProposalResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(object: I): MsgSubmitProposalResponse {
		const message = createBaseMsgSubmitProposalResponse();
		message.proposal_id = object.proposal_id ?? 0;
		return message;
	},
};

export const MsgVote: MessageFns<MsgVote, "cosmos.gov.v1beta1.MsgVote"> = {
	$type: "cosmos.gov.v1beta1.MsgVote" as const,

	encode(message: MsgVote, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		if (message.voter !== "") {
			writer.uint32(18).string(message.voter);
		}
		if (message.option !== 0) {
			writer.uint32(24).int32(message.option);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgVote();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.voter = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.option = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgVote {
		return {
			proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0,
			voter: isSet(object.voter) ? globalThis.String(object.voter) : "",
			option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
		};
	},

	toJSON(message: MsgVote): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		if (message.voter !== "") {
			obj.voter = message.voter;
		}
		if (message.option !== 0) {
			obj.option = voteOptionToJSON(message.option);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgVote>, I>>(base?: I): MsgVote {
		return MsgVote.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgVote>, I>>(object: I): MsgVote {
		const message = createBaseMsgVote();
		message.proposal_id = object.proposal_id ?? 0;
		message.voter = object.voter ?? "";
		message.option = object.option ?? 0;
		return message;
	},
};

export const MsgVoteResponse: MessageFns<MsgVoteResponse, "cosmos.gov.v1beta1.MsgVoteResponse"> = {
	$type: "cosmos.gov.v1beta1.MsgVoteResponse" as const,

	encode(_: MsgVoteResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgVoteResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgVoteResponse {
		return {};
	},

	toJSON(_: MsgVoteResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(base?: I): MsgVoteResponse {
		return MsgVoteResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(_: I): MsgVoteResponse {
		const message = createBaseMsgVoteResponse();
		return message;
	},
};

export const MsgVoteWeighted: MessageFns<MsgVoteWeighted, "cosmos.gov.v1beta1.MsgVoteWeighted"> = {
	$type: "cosmos.gov.v1beta1.MsgVoteWeighted" as const,

	encode(message: MsgVoteWeighted, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		if (message.voter !== "") {
			writer.uint32(18).string(message.voter);
		}
		for (const v of message.options) {
			WeightedVoteOption.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgVoteWeighted();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.voter = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgVoteWeighted {
		return {
			proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0,
			voter: isSet(object.voter) ? globalThis.String(object.voter) : "",
			options: globalThis.Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
		};
	},

	toJSON(message: MsgVoteWeighted): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		if (message.voter !== "") {
			obj.voter = message.voter;
		}
		if (message.options?.length) {
			obj.options = message.options.map((e) => WeightedVoteOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgVoteWeighted>, I>>(base?: I): MsgVoteWeighted {
		return MsgVoteWeighted.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgVoteWeighted>, I>>(object: I): MsgVoteWeighted {
		const message = createBaseMsgVoteWeighted();
		message.proposal_id = object.proposal_id ?? 0;
		message.voter = object.voter ?? "";
		message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
		return message;
	},
};

export const MsgVoteWeightedResponse: MessageFns<MsgVoteWeightedResponse, "cosmos.gov.v1beta1.MsgVoteWeightedResponse"> = {
	$type: "cosmos.gov.v1beta1.MsgVoteWeightedResponse" as const,

	encode(_: MsgVoteWeightedResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgVoteWeightedResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgVoteWeightedResponse {
		return {};
	},

	toJSON(_: MsgVoteWeightedResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgVoteWeightedResponse>, I>>(base?: I): MsgVoteWeightedResponse {
		return MsgVoteWeightedResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgVoteWeightedResponse>, I>>(_: I): MsgVoteWeightedResponse {
		const message = createBaseMsgVoteWeightedResponse();
		return message;
	},
};

export const MsgDeposit: MessageFns<MsgDeposit, "cosmos.gov.v1beta1.MsgDeposit"> = {
	$type: "cosmos.gov.v1beta1.MsgDeposit" as const,

	encode(message: MsgDeposit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		if (message.depositor !== "") {
			writer.uint32(18).string(message.depositor);
		}
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDeposit();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.depositor = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.amount.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgDeposit {
		return {
			proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0,
			depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
			amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
		};
	},

	toJSON(message: MsgDeposit): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		if (message.depositor !== "") {
			obj.depositor = message.depositor;
		}
		if (message.amount?.length) {
			obj.amount = message.amount.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDeposit>, I>>(base?: I): MsgDeposit {
		return MsgDeposit.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
		const message = createBaseMsgDeposit();
		message.proposal_id = object.proposal_id ?? 0;
		message.depositor = object.depositor ?? "";
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	},
};

export const MsgDepositResponse: MessageFns<MsgDepositResponse, "cosmos.gov.v1beta1.MsgDepositResponse"> = {
	$type: "cosmos.gov.v1beta1.MsgDepositResponse" as const,

	encode(_: MsgDepositResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDepositResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgDepositResponse {
		return {};
	},

	toJSON(_: MsgDepositResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(base?: I): MsgDepositResponse {
		return MsgDepositResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(_: I): MsgDepositResponse {
		const message = createBaseMsgDepositResponse();
		return message;
	},
};

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
	return { content: undefined, initial_deposit: [], proposer: "", is_expedited: false };
}

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
	return { proposal_id: 0 };
}

function createBaseMsgVote(): MsgVote {
	return { proposal_id: 0, voter: "", option: 0 };
}

function createBaseMsgVoteResponse(): MsgVoteResponse {
	return {};
}

function createBaseMsgVoteWeighted(): MsgVoteWeighted {
	return { proposal_id: 0, voter: "", options: [] };
}

function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
	return {};
}

function createBaseMsgDeposit(): MsgDeposit {
	return { proposal_id: 0, depositor: "", amount: [] };
}

function createBaseMsgDepositResponse(): MsgDepositResponse {
	return {};
}

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal as never],
	["/cosmos.gov.v1beta1.MsgVote", MsgVote as never],
	["/cosmos.gov.v1beta1.MsgVoteResponse", MsgVoteResponse as never],
	["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted as never],
	["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit as never],
	["/cosmos.gov.v1beta1.MsgDepositResponse", MsgDepositResponse as never],
];
export const aminoConverters = {
	"/cosmos.gov.v1beta1.MsgSubmitProposal": {
		aminoType: "cosmos-sdk/MsgSubmitProposal",
		toAmino: (message: MsgSubmitProposal) => ({ ...message }),
		fromAmino: (object: MsgSubmitProposal) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.MsgVote": {
		aminoType: "cosmos-sdk/MsgVote",
		toAmino: (message: MsgVote) => ({ ...message }),
		fromAmino: (object: MsgVote) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.MsgVoteResponse": {
		aminoType: "cosmos-sdk/MsgVoteResponse",
		toAmino: (message: MsgVoteResponse) => ({ ...message }),
		fromAmino: (object: MsgVoteResponse) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.MsgVoteWeighted": {
		aminoType: "cosmos-sdk/MsgVoteWeighted",
		toAmino: (message: MsgVoteWeighted) => ({ ...message }),
		fromAmino: (object: MsgVoteWeighted) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.MsgDeposit": {
		aminoType: "cosmos-sdk/MsgDeposit",
		toAmino: (message: MsgDeposit) => ({ ...message }),
		fromAmino: (object: MsgDeposit) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.MsgDepositResponse": {
		aminoType: "cosmos-sdk/MsgDepositResponse",
		toAmino: (message: MsgDepositResponse) => ({ ...message }),
		fromAmino: (object: MsgDepositResponse) => ({ ...object }),
	},
};
