import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	MsgAggregateExchangeRateVoteResponse as MsgAggregateExchangeRateVoteResponseType,
	MsgAggregateExchangeRateVote as MsgAggregateExchangeRateVoteType,
	MsgDelegateFeedConsentResponse as MsgDelegateFeedConsentResponseType,
	MsgDelegateFeedConsent as MsgDelegateFeedConsentType,
} from "../../types/oracle";

import type { DeepPartial, Exact, MessageFns } from "../common.ts";

interface MsgAggregateExchangeRateVote extends MsgAggregateExchangeRateVoteType {}
interface MsgAggregateExchangeRateVoteResponse extends MsgAggregateExchangeRateVoteResponseType {}
interface MsgDelegateFeedConsent extends MsgDelegateFeedConsentType {}
interface MsgDelegateFeedConsentResponse extends MsgDelegateFeedConsentResponseType {}

export const MsgAggregateExchangeRateVote: MessageFns<MsgAggregateExchangeRateVote, "seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote"> = {
	$type: "seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote" as const,

	encode(message: MsgAggregateExchangeRateVote, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.exchange_rates !== "") {
			writer.uint32(18).string(message.exchange_rates);
		}
		if (message.feeder !== "") {
			writer.uint32(26).string(message.feeder);
		}
		if (message.validator !== "") {
			writer.uint32(34).string(message.validator);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVote {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgAggregateExchangeRateVote();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 18) {
						break;
					}

					message.exchange_rates = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.feeder = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.validator = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgAggregateExchangeRateVote {
		return {
			exchange_rates: isSet(object.exchange_rates) ? globalThis.String(object.exchange_rates) : "",
			feeder: isSet(object.feeder) ? globalThis.String(object.feeder) : "",
			validator: isSet(object.validator) ? globalThis.String(object.validator) : "",
		};
	},

	toJSON(message: MsgAggregateExchangeRateVote): unknown {
		const obj: any = {};
		if (message.exchange_rates !== "") {
			obj.exchange_rates = message.exchange_rates;
		}
		if (message.feeder !== "") {
			obj.feeder = message.feeder;
		}
		if (message.validator !== "") {
			obj.validator = message.validator;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgAggregateExchangeRateVote>, I>>(base?: I): MsgAggregateExchangeRateVote {
		return MsgAggregateExchangeRateVote.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgAggregateExchangeRateVote>, I>>(object: I): MsgAggregateExchangeRateVote {
		const message = createBaseMsgAggregateExchangeRateVote();
		message.exchange_rates = object.exchange_rates ?? "";
		message.feeder = object.feeder ?? "";
		message.validator = object.validator ?? "";
		return message;
	},
};

export const MsgAggregateExchangeRateVoteResponse: MessageFns<
	MsgAggregateExchangeRateVoteResponse,
	"seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse"
> = {
	$type: "seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse" as const,

	encode(_: MsgAggregateExchangeRateVoteResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgAggregateExchangeRateVoteResponse();
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

	fromJSON(_: any): MsgAggregateExchangeRateVoteResponse {
		return {};
	},

	toJSON(_: MsgAggregateExchangeRateVoteResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgAggregateExchangeRateVoteResponse>, I>>(base?: I): MsgAggregateExchangeRateVoteResponse {
		return MsgAggregateExchangeRateVoteResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgAggregateExchangeRateVoteResponse>, I>>(_: I): MsgAggregateExchangeRateVoteResponse {
		const message = createBaseMsgAggregateExchangeRateVoteResponse();
		return message;
	},
};

export const MsgDelegateFeedConsent: MessageFns<MsgDelegateFeedConsent, "seiprotocol.seichain.oracle.MsgDelegateFeedConsent"> = {
	$type: "seiprotocol.seichain.oracle.MsgDelegateFeedConsent" as const,

	encode(message: MsgDelegateFeedConsent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.operator !== "") {
			writer.uint32(10).string(message.operator);
		}
		if (message.delegate !== "") {
			writer.uint32(18).string(message.delegate);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsent {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDelegateFeedConsent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.operator = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.delegate = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgDelegateFeedConsent {
		return {
			operator: isSet(object.operator) ? globalThis.String(object.operator) : "",
			delegate: isSet(object.delegate) ? globalThis.String(object.delegate) : "",
		};
	},

	toJSON(message: MsgDelegateFeedConsent): unknown {
		const obj: any = {};
		if (message.operator !== "") {
			obj.operator = message.operator;
		}
		if (message.delegate !== "") {
			obj.delegate = message.delegate;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDelegateFeedConsent>, I>>(base?: I): MsgDelegateFeedConsent {
		return MsgDelegateFeedConsent.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsent>, I>>(object: I): MsgDelegateFeedConsent {
		const message = createBaseMsgDelegateFeedConsent();
		message.operator = object.operator ?? "";
		message.delegate = object.delegate ?? "";
		return message;
	},
};

export const MsgDelegateFeedConsentResponse: MessageFns<MsgDelegateFeedConsentResponse, "seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse"> = {
	$type: "seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse" as const,

	encode(_: MsgDelegateFeedConsentResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDelegateFeedConsentResponse();
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

	fromJSON(_: any): MsgDelegateFeedConsentResponse {
		return {};
	},

	toJSON(_: MsgDelegateFeedConsentResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDelegateFeedConsentResponse>, I>>(base?: I): MsgDelegateFeedConsentResponse {
		return MsgDelegateFeedConsentResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsentResponse>, I>>(_: I): MsgDelegateFeedConsentResponse {
		const message = createBaseMsgDelegateFeedConsentResponse();
		return message;
	},
};

function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
	return { exchange_rates: "", feeder: "", validator: "" };
}

function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
	return {};
}

function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
	return { operator: "", delegate: "" };
}

function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
