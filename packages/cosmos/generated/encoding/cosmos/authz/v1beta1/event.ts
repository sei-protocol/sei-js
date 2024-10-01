import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { EventGrant as EventGrant_type, EventRevoke as EventRevoke_type } from "../../../../types/cosmos/authz/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface EventGrant extends EventGrant_type {}
export interface EventRevoke extends EventRevoke_type {}

export const EventGrant: MessageFns<EventGrant, "cosmos.authz.v1beta1.EventGrant"> = {
	$type: "cosmos.authz.v1beta1.EventGrant" as const,

	encode(message: EventGrant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.msg_type_url !== "") {
			writer.uint32(18).string(message.msg_type_url);
		}
		if (message.granter !== "") {
			writer.uint32(26).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(34).string(message.grantee);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EventGrant {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEventGrant();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 18) {
						break;
					}

					message.msg_type_url = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.grantee = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EventGrant {
		return {
			msg_type_url: isSet(object.msg_type_url) ? globalThis.String(object.msg_type_url) : "",
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
		};
	},

	toJSON(message: EventGrant): unknown {
		const obj: any = {};
		if (message.msg_type_url !== "") {
			obj.msg_type_url = message.msg_type_url;
		}
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EventGrant>, I>>(base?: I): EventGrant {
		return EventGrant.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EventGrant>, I>>(object: I): EventGrant {
		const message = createBaseEventGrant();
		message.msg_type_url = object.msg_type_url ?? "";
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		return message;
	},
};

export const EventRevoke: MessageFns<EventRevoke, "cosmos.authz.v1beta1.EventRevoke"> = {
	$type: "cosmos.authz.v1beta1.EventRevoke" as const,

	encode(message: EventRevoke, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.msg_type_url !== "") {
			writer.uint32(18).string(message.msg_type_url);
		}
		if (message.granter !== "") {
			writer.uint32(26).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(34).string(message.grantee);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EventRevoke {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEventRevoke();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 18) {
						break;
					}

					message.msg_type_url = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.grantee = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EventRevoke {
		return {
			msg_type_url: isSet(object.msg_type_url) ? globalThis.String(object.msg_type_url) : "",
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
		};
	},

	toJSON(message: EventRevoke): unknown {
		const obj: any = {};
		if (message.msg_type_url !== "") {
			obj.msg_type_url = message.msg_type_url;
		}
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EventRevoke>, I>>(base?: I): EventRevoke {
		return EventRevoke.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EventRevoke>, I>>(object: I): EventRevoke {
		const message = createBaseEventRevoke();
		message.msg_type_url = object.msg_type_url ?? "";
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		return message;
	},
};

function createBaseEventGrant(): EventGrant {
	return { msg_type_url: "", granter: "", grantee: "" };
}

function createBaseEventRevoke(): EventRevoke {
	return { msg_type_url: "", granter: "", grantee: "" };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.authz.v1beta1.EventGrant", EventGrant as never],
	["/cosmos.authz.v1beta1.EventRevoke", EventRevoke as never],
];
export const aminoConverters = {
	"/cosmos.authz.v1beta1.EventGrant": {
		aminoType: "cosmos-sdk/EventGrant",
		toAmino: (message: EventGrant) => ({ ...message }),
		fromAmino: (object: EventGrant) => ({ ...object }),
	},

	"/cosmos.authz.v1beta1.EventRevoke": {
		aminoType: "cosmos-sdk/EventRevoke",
		toAmino: (message: EventRevoke) => ({ ...message }),
		fromAmino: (object: EventRevoke) => ({ ...object }),
	},
};
