import { TxBody, AuthInfo } from '@sei-js/proto/dist/types/codegen/cosmos/tx/v1beta1/tx';
import Long from 'long';
import { cosmos } from '@sei-js/proto';
import { compressedPubKeyToAddress } from '@sei-js/core';
import { decodeRawAuthInfo, decodeTxBody } from '../ui';
import { sanitizedUint8Array } from '../utils';

describe('decodeTxBody', () => {
	it('should decode TxBody correctly', () => {
		const readableMessage = {
			fromAddress: 'sei1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5',
			toAddress: 'sei1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5',
			amount: [{ denom: 'usei', amount: '1000' }]
		};

		const txBody: TxBody = {
			timeoutHeight: Long.fromNumber(60) as any,
			messages: [
				{
					typeUrl: '/cosmos.bank.v1beta1.MsgSend',
					value: cosmos.bank.v1beta1.MsgSend.encode(readableMessage).finish()
				}
			],
			extensionOptions: [],
			nonCriticalExtensionOptions: [],
			memo: 'TX Memo'
		};

		const decoded = decodeTxBody(txBody);

		expect(decoded.timeoutHeight.toNumber()).toEqual(60);
		expect(decoded.messages).toEqual([
			{
				typeUrl: '/cosmos.bank.v1beta1.MsgSend',
				value: readableMessage
			}
		]);
		expect(decoded.memo).toEqual('TX Memo');
	});
});

describe('decodeRawAuthInfo', () => {
	it('should decode AuthInfo correctly', () => {
		const authInfo: AuthInfo = {
			signerInfos: [
				{
					publicKey: {
						typeUrl: '/cosmos.crypto.secp256k1.PubKey',
						value: cosmos.crypto.secp256k1.PubKey.encode({
							key: sanitizedUint8Array({
								'0': 4,
								'1': 5,
								'2': 121,
								'3': 77,
								'4': 45,
								'5': 51,
								'6': 168,
								'7': 168,
								'8': 199,
								'9': 226,
								'10': 28,
								'11': 170,
								'12': 137,
								'13': 26,
								'14': 156,
								'15': 181,
								'16': 180,
								'17': 83,
								'18': 159,
								'19': 180,
								'20': 194,
								'21': 251,
								'22': 80,
								'23': 228,
								'24': 107,
								'25': 50,
								'26': 107,
								'27': 50,
								'28': 36,
								'29': 116,
								'30': 206,
								'31': 113,
								'32': 151,
								'33': 99,
								'34': 202,
								'35': 10,
								'36': 12,
								'37': 134,
								'38': 154,
								'39': 135,
								'40': 100,
								'41': 2,
								'42': 137,
								'43': 235,
								'44': 228,
								'45': 162,
								'46': 192,
								'47': 8,
								'48': 130,
								'49': 32,
								'50': 89,
								'51': 187,
								'52': 247,
								'53': 86,
								'54': 65,
								'55': 41,
								'56': 186,
								'57': 254,
								'58': 81,
								'59': 103,
								'60': 106,
								'61': 188,
								'62': 83,
								'63': 185,
								'64': 33
							})
						}).finish()
					},
					modeInfo: {
						single: {
							//Sign mode direct
							mode: 1
						}
					},
					sequence: Long.fromNumber(42) as any
				}
			],
			fee: {
				amount: [{ denom: 'usei', amount: '1000' }],
				gasLimit: Long.fromNumber(50000) as any,
				payer: '',
				granter: ''
			},
			tip: {
				tipper: '',
				amount: []
			}
		};

		const decoded = decodeRawAuthInfo(authInfo);

		expect(decoded.signerInfos.length).toEqual(1);
		expect(decoded.fee.gasLimit).toEqual(50000);

		const seiAddress = compressedPubKeyToAddress(decoded.signerInfos[0].publicKey.value);
		expect(seiAddress).toBe('sei17lf2fjpqywmwa2t678zzrmhjhmwwthh0rsqr5v');
	});
});
