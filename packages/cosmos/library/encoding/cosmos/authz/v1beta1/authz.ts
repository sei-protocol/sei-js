import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { Timestamp } from "../../../google/protobuf/timestamp";

import type {
	GenericAuthorization as GenericAuthorization_type,
	GrantAuthorization as GrantAuthorization_type,
	Grant as Grant_type
} from "../../../../types/cosmos/authz/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenericAuthorization extends GenericAuthorization_type {}
export interface Grant extends Grant_type {}
export interface GrantAuthorization extends GrantAuthorization_type {}

export const GenericAuthorization: MessageFns<GenericAuthorization, "cosmos.authz.v1beta1.GenericAuthorization"> = {
	$type: "cosmos.authz.v1beta1.GenericAuthorization" as const,

	encode(message: GenericAuthorization, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.msg !== "") {
			writer.uint32(10).string(message.msg);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenericAuthorization();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.msg = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenericAuthorization {
		return { msg: isSet(object.msg) ? globalThis.String(object.msg) : "" };
	},

	toJSON(message: GenericAuthorization): unknown {
		const obj: any = {};
		if (message.msg !== "") {
			obj.msg = message.msg;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenericAuthorization>, I>>(base?: I): GenericAuthorization {
		return GenericAuthorization.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenericAuthorization>, I>>(object: I): GenericAuthorization {
		const message = createBaseGenericAuthorization();
		message.msg = object.msg ?? "";
		return message;
	}
};

export const Grant: MessageFns<Grant, "cosmos.authz.v1beta1.Grant"> = {
	$type: "cosmos.authz.v1beta1.Grant" as const,

	encode(message: Grant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.authorization !== undefined) {
			Any.encode(message.authorization, writer.uint32(10).fork()).join();
		}
		if (message.expiration !== undefined) {
			Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Grant {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGrant();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.authorization = Any.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Grant {
		return {
			authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
			expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
		};
	},

	toJSON(message: Grant): unknown {
		const obj: any = {};
		if (message.authorization !== undefined) {
			obj.authorization = Any.toJSON(message.authorization);
		}
		if (message.expiration !== undefined) {
			obj.expiration = message.expiration.toISOString();
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Grant>, I>>(base?: I): Grant {
		return Grant.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
		const message = createBaseGrant();
		message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
		message.expiration = object.expiration ?? undefined;
		return message;
	}
};

export const GrantAuthorization: MessageFns<GrantAuthorization, "cosmos.authz.v1beta1.GrantAuthorization"> = {
	$type: "cosmos.authz.v1beta1.GrantAuthorization" as const,

	encode(message: GrantAuthorization, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(18).string(message.grantee);
		}
		if (message.authorization !== undefined) {
			Any.encode(message.authorization, writer.uint32(26).fork()).join();
		}
		if (message.expiration !== undefined) {
			Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GrantAuthorization {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGrantAuthorization();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.grantee = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.authorization = Any.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GrantAuthorization {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
			expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
		};
	},

	toJSON(message: GrantAuthorization): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		if (message.authorization !== undefined) {
			obj.authorization = Any.toJSON(message.authorization);
		}
		if (message.expiration !== undefined) {
			obj.expiration = message.expiration.toISOString();
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GrantAuthorization>, I>>(base?: I): GrantAuthorization {
		return GrantAuthorization.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GrantAuthorization>, I>>(object: I): GrantAuthorization {
		const message = createBaseGrantAuthorization();
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
		message.expiration = object.expiration ?? undefined;
		return message;
	}
};

function createBaseGenericAuthorization(): GenericAuthorization {
	return { msg: "" };
}

function createBaseGrant(): Grant {
	return { authorization: undefined, expiration: undefined };
}

function createBaseGrantAuthorization(): GrantAuthorization {
	return { granter: "", grantee: "", authorization: undefined, expiration: undefined };
}

function toTimestamp(date: Date): Timestamp {
	const seconds = Math.trunc(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = (t.seconds || 0) * 1_000;
	millis += (t.nanos || 0) / 1_000_000;
	return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof globalThis.Date) {
		return o;
	} else if (typeof o === "string") {
		return new globalThis.Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
	}
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.authz.v1beta1.GenericAuthorization", GenericAuthorization as never],
	["/cosmos.authz.v1beta1.Grant", Grant as never],
	["/cosmos.authz.v1beta1.GrantAuthorization", GrantAuthorization as never]
];
export const aminoConverters = {
	"/cosmos.authz.v1beta1.GenericAuthorization": {
		aminoType: "cosmos-sdk/GenericAuthorization",
		toAmino: (message: GenericAuthorization) => ({ ...message }),
		fromAmino: (object: GenericAuthorization) => ({ ...object })
	},

	"/cosmos.authz.v1beta1.Grant": {
		aminoType: "cosmos-sdk/Grant",
		toAmino: (message: Grant) => ({ ...message }),
		fromAmino: (object: Grant) => ({ ...object })
	},

	"/cosmos.authz.v1beta1.GrantAuthorization": {
		aminoType: "cosmos-sdk/GrantAuthorization",
		toAmino: (message: GrantAuthorization) => ({ ...message }),
		fromAmino: (object: GrantAuthorization) => ({ ...object })
	}
};
