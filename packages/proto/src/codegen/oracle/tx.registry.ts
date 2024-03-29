import { TelescopeGeneratedType } from '../types';
import { Registry } from '@cosmjs/proto-signing';
import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from './tx';
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
	['/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote', MsgAggregateExchangeRateVote],
	['/seiprotocol.seichain.oracle.MsgDelegateFeedConsent', MsgDelegateFeedConsent]
];
export const load = (protoRegistry: Registry) => {
	registry.forEach(([typeUrl, mod]) => {
		protoRegistry.register(typeUrl, mod);
	});
};
export const MessageComposer = {
	encoded: {
		aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
			return {
				typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote',
				value: MsgAggregateExchangeRateVote.encode(value).finish()
			};
		},
		delegateFeedConsent(value: MsgDelegateFeedConsent) {
			return {
				typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsent',
				value: MsgDelegateFeedConsent.encode(value).finish()
			};
		}
	},
	withTypeUrl: {
		aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
			return {
				typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote',
				value
			};
		},
		delegateFeedConsent(value: MsgDelegateFeedConsent) {
			return {
				typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsent',
				value
			};
		}
	},
	fromPartial: {
		aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
			return {
				typeUrl: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote',
				value: MsgAggregateExchangeRateVote.fromPartial(value)
			};
		},
		delegateFeedConsent(value: MsgDelegateFeedConsent) {
			return {
				typeUrl: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsent',
				value: MsgDelegateFeedConsent.fromPartial(value)
			};
		}
	}
};
