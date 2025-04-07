import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Deposit, DepositParams, Proposal, TallyParams, Vote, VotingParams } from "./gov";

import type { GenesisState as GenesisState_type } from "../../../../types/cosmos/gov/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenesisState extends GenesisState_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.gov.v1beta1.GenesisState"> = {
	$type: "cosmos.gov.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.starting_proposal_id !== 0) {
			writer.uint32(8).uint64(message.starting_proposal_id);
		}
		for (const v of message.deposits) {
			Deposit.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.votes) {
			Vote.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.proposals) {
			Proposal.encode(v!, writer.uint32(34).fork()).join();
		}
		if (message.deposit_params !== undefined) {
			DepositParams.encode(message.deposit_params, writer.uint32(42).fork()).join();
		}
		if (message.voting_params !== undefined) {
			VotingParams.encode(message.voting_params, writer.uint32(50).fork()).join();
		}
		if (message.tally_params !== undefined) {
			TallyParams.encode(message.tally_params, writer.uint32(58).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.starting_proposal_id = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.deposits.push(Deposit.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.votes.push(Vote.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.proposals.push(Proposal.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.deposit_params = DepositParams.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.voting_params = VotingParams.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.tally_params = TallyParams.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisState {
		return {
			starting_proposal_id: isSet(object.starting_proposal_id) ? globalThis.Number(object.starting_proposal_id) : 0,
			deposits: globalThis.Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
			votes: globalThis.Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
			proposals: globalThis.Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
			deposit_params: isSet(object.deposit_params) ? DepositParams.fromJSON(object.deposit_params) : undefined,
			voting_params: isSet(object.voting_params) ? VotingParams.fromJSON(object.voting_params) : undefined,
			tally_params: isSet(object.tally_params) ? TallyParams.fromJSON(object.tally_params) : undefined
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.starting_proposal_id !== 0) {
			obj.starting_proposal_id = Math.round(message.starting_proposal_id);
		}
		if (message.deposits?.length) {
			obj.deposits = message.deposits.map((e) => Deposit.toJSON(e));
		}
		if (message.votes?.length) {
			obj.votes = message.votes.map((e) => Vote.toJSON(e));
		}
		if (message.proposals?.length) {
			obj.proposals = message.proposals.map((e) => Proposal.toJSON(e));
		}
		if (message.deposit_params !== undefined) {
			obj.deposit_params = DepositParams.toJSON(message.deposit_params);
		}
		if (message.voting_params !== undefined) {
			obj.voting_params = VotingParams.toJSON(message.voting_params);
		}
		if (message.tally_params !== undefined) {
			obj.tally_params = TallyParams.toJSON(message.tally_params);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.starting_proposal_id = object.starting_proposal_id ?? 0;
		message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
		message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
		message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
		message.deposit_params =
			object.deposit_params !== undefined && object.deposit_params !== null ? DepositParams.fromPartial(object.deposit_params) : undefined;
		message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? VotingParams.fromPartial(object.voting_params) : undefined;
		message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? TallyParams.fromPartial(object.tally_params) : undefined;
		return message;
	}
};

function createBaseGenesisState(): GenesisState {
	return {
		starting_proposal_id: 0,
		deposits: [],
		votes: [],
		proposals: [],
		deposit_params: undefined,
		voting_params: undefined,
		tally_params: undefined
	};
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
export const registry: Array<[string, GeneratedType]> = [["/cosmos.gov.v1beta1.GenesisState", GenesisState as never]];
export const aminoConverters = {
	"/cosmos.gov.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object })
	}
};
