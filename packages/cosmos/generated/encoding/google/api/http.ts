import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { CustomHttpPattern as CustomHttpPatternType, HttpRule as HttpRuleType, Http as HttpType } from "../../../types/google/api";

import type { DeepPartial, Exact, MessageFns } from "../../common.ts";

interface Http extends HttpType {}
interface HttpRule extends HttpRuleType {}
interface CustomHttpPattern extends CustomHttpPatternType {}

export const Http: MessageFns<Http, "google.api.Http"> = {
	$type: "google.api.Http" as const,

	encode(message: Http, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.rules) {
			HttpRule.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.fully_decode_reserved_expansion !== false) {
			writer.uint32(16).bool(message.fully_decode_reserved_expansion);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Http {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseHttp();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.rules.push(HttpRule.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.fully_decode_reserved_expansion = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Http {
		return {
			rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e: any) => HttpRule.fromJSON(e)) : [],
			fully_decode_reserved_expansion: isSet(object.fully_decode_reserved_expansion) ? globalThis.Boolean(object.fully_decode_reserved_expansion) : false,
		};
	},

	toJSON(message: Http): unknown {
		const obj: any = {};
		if (message.rules?.length) {
			obj.rules = message.rules.map((e) => HttpRule.toJSON(e));
		}
		if (message.fully_decode_reserved_expansion !== false) {
			obj.fully_decode_reserved_expansion = message.fully_decode_reserved_expansion;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Http>, I>>(base?: I): Http {
		return Http.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Http>, I>>(object: I): Http {
		const message = createBaseHttp();
		message.rules = object.rules?.map((e) => HttpRule.fromPartial(e)) || [];
		message.fully_decode_reserved_expansion = object.fully_decode_reserved_expansion ?? false;
		return message;
	},
};

export const HttpRule: MessageFns<HttpRule, "google.api.HttpRule"> = {
	$type: "google.api.HttpRule" as const,

	encode(message: HttpRule, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.selector !== "") {
			writer.uint32(10).string(message.selector);
		}
		if (message.get !== undefined) {
			writer.uint32(18).string(message.get);
		}
		if (message.put !== undefined) {
			writer.uint32(26).string(message.put);
		}
		if (message.post !== undefined) {
			writer.uint32(34).string(message.post);
		}
		if (message.delete !== undefined) {
			writer.uint32(42).string(message.delete);
		}
		if (message.patch !== undefined) {
			writer.uint32(50).string(message.patch);
		}
		if (message.custom !== undefined) {
			CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).join();
		}
		if (message.body !== "") {
			writer.uint32(58).string(message.body);
		}
		if (message.response_body !== "") {
			writer.uint32(98).string(message.response_body);
		}
		for (const v of message.additional_bindings) {
			HttpRule.encode(v!, writer.uint32(90).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): HttpRule {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseHttpRule();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.selector = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.get = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.put = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.post = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.delete = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.patch = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.custom = CustomHttpPattern.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.body = reader.string();
					continue;
				case 12:
					if (tag !== 98) {
						break;
					}

					message.response_body = reader.string();
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.additional_bindings.push(HttpRule.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): HttpRule {
		return {
			selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
			get: isSet(object.get) ? globalThis.String(object.get) : undefined,
			put: isSet(object.put) ? globalThis.String(object.put) : undefined,
			post: isSet(object.post) ? globalThis.String(object.post) : undefined,
			delete: isSet(object.delete) ? globalThis.String(object.delete) : undefined,
			patch: isSet(object.patch) ? globalThis.String(object.patch) : undefined,
			custom: isSet(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
			body: isSet(object.body) ? globalThis.String(object.body) : "",
			response_body: isSet(object.response_body) ? globalThis.String(object.response_body) : "",
			additional_bindings: globalThis.Array.isArray(object?.additional_bindings) ? object.additional_bindings.map((e: any) => HttpRule.fromJSON(e)) : [],
		};
	},

	toJSON(message: HttpRule): unknown {
		const obj: any = {};
		if (message.selector !== "") {
			obj.selector = message.selector;
		}
		if (message.get !== undefined) {
			obj.get = message.get;
		}
		if (message.put !== undefined) {
			obj.put = message.put;
		}
		if (message.post !== undefined) {
			obj.post = message.post;
		}
		if (message.delete !== undefined) {
			obj.delete = message.delete;
		}
		if (message.patch !== undefined) {
			obj.patch = message.patch;
		}
		if (message.custom !== undefined) {
			obj.custom = CustomHttpPattern.toJSON(message.custom);
		}
		if (message.body !== "") {
			obj.body = message.body;
		}
		if (message.response_body !== "") {
			obj.response_body = message.response_body;
		}
		if (message.additional_bindings?.length) {
			obj.additional_bindings = message.additional_bindings.map((e) => HttpRule.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<HttpRule>, I>>(base?: I): HttpRule {
		return HttpRule.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<HttpRule>, I>>(object: I): HttpRule {
		const message = createBaseHttpRule();
		message.selector = object.selector ?? "";
		message.get = object.get ?? undefined;
		message.put = object.put ?? undefined;
		message.post = object.post ?? undefined;
		message.delete = object.delete ?? undefined;
		message.patch = object.patch ?? undefined;
		message.custom = object.custom !== undefined && object.custom !== null ? CustomHttpPattern.fromPartial(object.custom) : undefined;
		message.body = object.body ?? "";
		message.response_body = object.response_body ?? "";
		message.additional_bindings = object.additional_bindings?.map((e) => HttpRule.fromPartial(e)) || [];
		return message;
	},
};

export const CustomHttpPattern: MessageFns<CustomHttpPattern, "google.api.CustomHttpPattern"> = {
	$type: "google.api.CustomHttpPattern" as const,

	encode(message: CustomHttpPattern, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.kind !== "") {
			writer.uint32(10).string(message.kind);
		}
		if (message.path !== "") {
			writer.uint32(18).string(message.path);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CustomHttpPattern {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCustomHttpPattern();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.kind = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.path = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CustomHttpPattern {
		return {
			kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
			path: isSet(object.path) ? globalThis.String(object.path) : "",
		};
	},

	toJSON(message: CustomHttpPattern): unknown {
		const obj: any = {};
		if (message.kind !== "") {
			obj.kind = message.kind;
		}
		if (message.path !== "") {
			obj.path = message.path;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CustomHttpPattern>, I>>(base?: I): CustomHttpPattern {
		return CustomHttpPattern.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CustomHttpPattern>, I>>(object: I): CustomHttpPattern {
		const message = createBaseCustomHttpPattern();
		message.kind = object.kind ?? "";
		message.path = object.path ?? "";
		return message;
	},
};

function createBaseHttp(): Http {
	return { rules: [], fully_decode_reserved_expansion: false };
}

function createBaseHttpRule(): HttpRule {
	return {
		selector: "",
		get: undefined,
		put: undefined,
		post: undefined,
		delete: undefined,
		patch: undefined,
		custom: undefined,
		body: "",
		response_body: "",
		additional_bindings: [],
	};
}

function createBaseCustomHttpPattern(): CustomHttpPattern {
	return { kind: "", path: "" };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/google.api.Http", Http as never],
	["/google.api.HttpRule", HttpRule as never],
	["/google.api.CustomHttpPattern", CustomHttpPattern as never],
];
export const aminoConverters = {
	"/google.api.Http": {
		aminoType: "google.api.Http",
		toAmino: (message: Http) => ({ ...message }),
		fromAmino: (object: Http) => ({ ...object }),
	},

	"/google.api.HttpRule": {
		aminoType: "google.api.HttpRule",
		toAmino: (message: HttpRule) => ({ ...message }),
		fromAmino: (object: HttpRule) => ({ ...object }),
	},

	"/google.api.CustomHttpPattern": {
		aminoType: "google.api.CustomHttpPattern",
		toAmino: (message: CustomHttpPattern) => ({ ...message }),
		fromAmino: (object: CustomHttpPattern) => ({ ...object }),
	},
};
