import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from './tx';
export const AminoConverter = {
	'/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote': {
		aminoType: '/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote',
		toAmino: MsgAggregateExchangeRateVote.toAmino,
		fromAmino: MsgAggregateExchangeRateVote.fromAmino
	},
	'/seiprotocol.seichain.oracle.MsgDelegateFeedConsent': {
		aminoType: '/seiprotocol.seichain.oracle.MsgDelegateFeedConsent',
		toAmino: MsgDelegateFeedConsent.toAmino,
		fromAmino: MsgDelegateFeedConsent.fromAmino
	}
};
