import { TelescopeGeneratedType } from '../types';
import { Registry } from '@cosmjs/proto-signing';
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from './tx';
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
	['/seiprotocol.seichain.tokenfactory.MsgCreateDenom', MsgCreateDenom],
	['/seiprotocol.seichain.tokenfactory.MsgMint', MsgMint],
	['/seiprotocol.seichain.tokenfactory.MsgBurn', MsgBurn],
	['/seiprotocol.seichain.tokenfactory.MsgChangeAdmin', MsgChangeAdmin],
	['/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata', MsgSetDenomMetadata]
];
export const load = (protoRegistry: Registry) => {
	registry.forEach(([typeUrl, mod]) => {
		protoRegistry.register(typeUrl, mod);
	});
};
export const MessageComposer = {
	encoded: {
		createDenom(value: MsgCreateDenom) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgCreateDenom',
				value: MsgCreateDenom.encode(value).finish()
			};
		},
		mint(value: MsgMint) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgMint',
				value: MsgMint.encode(value).finish()
			};
		},
		burn(value: MsgBurn) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgBurn',
				value: MsgBurn.encode(value).finish()
			};
		},
		changeAdmin(value: MsgChangeAdmin) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgChangeAdmin',
				value: MsgChangeAdmin.encode(value).finish()
			};
		},
		setDenomMetadata(value: MsgSetDenomMetadata) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata',
				value: MsgSetDenomMetadata.encode(value).finish()
			};
		}
	},
	withTypeUrl: {
		createDenom(value: MsgCreateDenom) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgCreateDenom',
				value
			};
		},
		mint(value: MsgMint) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgMint',
				value
			};
		},
		burn(value: MsgBurn) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgBurn',
				value
			};
		},
		changeAdmin(value: MsgChangeAdmin) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgChangeAdmin',
				value
			};
		},
		setDenomMetadata(value: MsgSetDenomMetadata) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata',
				value
			};
		}
	},
	fromPartial: {
		createDenom(value: MsgCreateDenom) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgCreateDenom',
				value: MsgCreateDenom.fromPartial(value)
			};
		},
		mint(value: MsgMint) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgMint',
				value: MsgMint.fromPartial(value)
			};
		},
		burn(value: MsgBurn) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgBurn',
				value: MsgBurn.fromPartial(value)
			};
		},
		changeAdmin(value: MsgChangeAdmin) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgChangeAdmin',
				value: MsgChangeAdmin.fromPartial(value)
			};
		},
		setDenomMetadata(value: MsgSetDenomMetadata) {
			return {
				typeUrl: '/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata',
				value: MsgSetDenomMetadata.fromPartial(value)
			};
		}
	}
};
