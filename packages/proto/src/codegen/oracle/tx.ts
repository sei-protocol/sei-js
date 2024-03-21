import { BinaryReader, BinaryWriter } from '../binary';
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
	/** 1 reserved from old field `salt` */
	exchangeRates: string;
	feeder: string;
	validator: string;
}
export interface MsgAggregateExchangeRateVoteProtoMsg {
	typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote';
	value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteAmino {
	/** 1 reserved from old field `salt` */
	exchange_rates?: string;
	feeder?: string;
	validator?: string;
}
export interface MsgAggregateExchangeRateVoteAminoMsg {
	type: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote';
	value: MsgAggregateExchangeRateVoteAmino;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteSDKType {
	exchange_rates: string;
	feeder: string;
	validator: string;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponse {}
export interface MsgAggregateExchangeRateVoteResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse';
	value: Uint8Array;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseAmino {}
export interface MsgAggregateExchangeRateVoteResponseAminoMsg {
	type: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse';
	value: MsgAggregateExchangeRateVoteResponseAmino;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseSDKType {}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
	operator: string;
	delegate: string;
}
export interface MsgDelegateFeedConsentProtoMsg {
	typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsent';
	value: Uint8Array;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentAmino {
	operator?: string;
	delegate?: string;
}
export interface MsgDelegateFeedConsentAminoMsg {
	type: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsent';
	value: MsgDelegateFeedConsentAmino;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentSDKType {
	operator: string;
	delegate: string;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponse {}
export interface MsgDelegateFeedConsentResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse';
	value: Uint8Array;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseAmino {}
export interface MsgDelegateFeedConsentResponseAminoMsg {
	type: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse';
	value: MsgDelegateFeedConsentResponseAmino;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseSDKType {}
function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
	return {
		exchangeRates: '',
		feeder: '',
		validator: ''
	};
}
export const MsgAggregateExchangeRateVote = {
	typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote',
	encode(message: MsgAggregateExchangeRateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.exchangeRates !== '') {
			writer.uint32(18).string(message.exchangeRates);
		}
		if (message.feeder !== '') {
			writer.uint32(26).string(message.feeder);
		}
		if (message.validator !== '') {
			writer.uint32(34).string(message.validator);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVote {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgAggregateExchangeRateVote();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					message.exchangeRates = reader.string();
					break;
				case 3:
					message.feeder = reader.string();
					break;
				case 4:
					message.validator = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote {
		const message = createBaseMsgAggregateExchangeRateVote();
		message.exchangeRates = object.exchangeRates ?? '';
		message.feeder = object.feeder ?? '';
		message.validator = object.validator ?? '';
		return message;
	},
	fromAmino(object: MsgAggregateExchangeRateVoteAmino): MsgAggregateExchangeRateVote {
		const message = createBaseMsgAggregateExchangeRateVote();
		if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
			message.exchangeRates = object.exchange_rates;
		}
		if (object.feeder !== undefined && object.feeder !== null) {
			message.feeder = object.feeder;
		}
		if (object.validator !== undefined && object.validator !== null) {
			message.validator = object.validator;
		}
		return message;
	},
	toAmino(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteAmino {
		const obj: any = {};
		obj.exchange_rates = message.exchangeRates;
		obj.feeder = message.feeder;
		obj.validator = message.validator;
		return obj;
	},
	fromAminoMsg(object: MsgAggregateExchangeRateVoteAminoMsg): MsgAggregateExchangeRateVote {
		return MsgAggregateExchangeRateVote.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgAggregateExchangeRateVoteProtoMsg): MsgAggregateExchangeRateVote {
		return MsgAggregateExchangeRateVote.decode(message.value);
	},
	toProto(message: MsgAggregateExchangeRateVote): Uint8Array {
		return MsgAggregateExchangeRateVote.encode(message).finish();
	},
	toProtoMsg(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote',
			value: MsgAggregateExchangeRateVote.encode(message).finish()
		};
	}
};
function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
	return {};
}
export const MsgAggregateExchangeRateVoteResponse = {
	typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse',
	encode(_: MsgAggregateExchangeRateVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgAggregateExchangeRateVoteResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(_: Partial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse {
		const message = createBaseMsgAggregateExchangeRateVoteResponse();
		return message;
	},
	fromAmino(_: MsgAggregateExchangeRateVoteResponseAmino): MsgAggregateExchangeRateVoteResponse {
		const message = createBaseMsgAggregateExchangeRateVoteResponse();
		return message;
	},
	toAmino(_: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgAggregateExchangeRateVoteResponseAminoMsg): MsgAggregateExchangeRateVoteResponse {
		return MsgAggregateExchangeRateVoteResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgAggregateExchangeRateVoteResponseProtoMsg): MsgAggregateExchangeRateVoteResponse {
		return MsgAggregateExchangeRateVoteResponse.decode(message.value);
	},
	toProto(message: MsgAggregateExchangeRateVoteResponse): Uint8Array {
		return MsgAggregateExchangeRateVoteResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse',
			value: MsgAggregateExchangeRateVoteResponse.encode(message).finish()
		};
	}
};
function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
	return {
		operator: '',
		delegate: ''
	};
}
export const MsgDelegateFeedConsent = {
	typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsent',
	encode(message: MsgDelegateFeedConsent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.operator !== '') {
			writer.uint32(10).string(message.operator);
		}
		if (message.delegate !== '') {
			writer.uint32(18).string(message.delegate);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsent {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDelegateFeedConsent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.operator = reader.string();
					break;
				case 2:
					message.delegate = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent {
		const message = createBaseMsgDelegateFeedConsent();
		message.operator = object.operator ?? '';
		message.delegate = object.delegate ?? '';
		return message;
	},
	fromAmino(object: MsgDelegateFeedConsentAmino): MsgDelegateFeedConsent {
		const message = createBaseMsgDelegateFeedConsent();
		if (object.operator !== undefined && object.operator !== null) {
			message.operator = object.operator;
		}
		if (object.delegate !== undefined && object.delegate !== null) {
			message.delegate = object.delegate;
		}
		return message;
	},
	toAmino(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentAmino {
		const obj: any = {};
		obj.operator = message.operator;
		obj.delegate = message.delegate;
		return obj;
	},
	fromAminoMsg(object: MsgDelegateFeedConsentAminoMsg): MsgDelegateFeedConsent {
		return MsgDelegateFeedConsent.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgDelegateFeedConsentProtoMsg): MsgDelegateFeedConsent {
		return MsgDelegateFeedConsent.decode(message.value);
	},
	toProto(message: MsgDelegateFeedConsent): Uint8Array {
		return MsgDelegateFeedConsent.encode(message).finish();
	},
	toProtoMsg(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsent',
			value: MsgDelegateFeedConsent.encode(message).finish()
		};
	}
};
function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
	return {};
}
export const MsgDelegateFeedConsentResponse = {
	typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse',
	encode(_: MsgDelegateFeedConsentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDelegateFeedConsentResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(_: Partial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse {
		const message = createBaseMsgDelegateFeedConsentResponse();
		return message;
	},
	fromAmino(_: MsgDelegateFeedConsentResponseAmino): MsgDelegateFeedConsentResponse {
		const message = createBaseMsgDelegateFeedConsentResponse();
		return message;
	},
	toAmino(_: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgDelegateFeedConsentResponseAminoMsg): MsgDelegateFeedConsentResponse {
		return MsgDelegateFeedConsentResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgDelegateFeedConsentResponseProtoMsg): MsgDelegateFeedConsentResponse {
		return MsgDelegateFeedConsentResponse.decode(message.value);
	},
	toProto(message: MsgDelegateFeedConsentResponse): Uint8Array {
		return MsgDelegateFeedConsentResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse',
			value: MsgDelegateFeedConsentResponse.encode(message).finish()
		};
	}
};
