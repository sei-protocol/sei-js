import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { SignAminoRequest, SignDirectRequest, VerifyArbitraryRequest } from './types';
import { SnapWallet, verifyArbitrary } from '@sei-js/core';
import Long from 'long';
import { sanitizedUint8Array } from './utils';
import { heading, NodeType, panel } from '@metamask/snaps-ui';
import { getDirectPanel } from './ui';
import { BIP44CoinTypeNode, getBIP44AddressKeyDeriver } from '@metamask/key-tree';
import { SnapRequest } from './types';

export const getPrivateKey = async (account_index?: number) => {
	const bip44CoinNode = (await snap.request({
		method: 'snap_getBip44Entropy',
		params: {
			coinType: 118
		}
	})) as unknown as BIP44CoinTypeNode;

	const bip44AddressKeyDeriver = await getBIP44AddressKeyDeriver(bip44CoinNode);
	return await bip44AddressKeyDeriver(account_index || 0);
};

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
	const { account_index } = request.params as unknown as SnapRequest;

	const account = await getPrivateKey(account_index || 0);
	if (!account?.privateKey) return;
	const wallet = SnapWallet.create(account.privateKey);
	switch (request.method) {
		case 'verifyArbitrary':
			const { signer, message, signature } = request.params as unknown as VerifyArbitraryRequest;
			if (!signer || !message) {
				throw new Error('Invalid params');
			}
			return await verifyArbitrary(signer, message, signature);
		case 'signDirect': {
			const params = request.params as unknown as SignDirectRequest;

			const { signerAddress, signDoc } = params;

			const { low, high, unsigned } = signDoc.accountNumber;
			const accountNumber = new Long(low, high, unsigned);

			const sd = {
				bodyBytes: sanitizedUint8Array(signDoc.bodyBytes),
				authInfoBytes: sanitizedUint8Array(signDoc.authInfoBytes),
				chainId: signDoc.chainId,
				accountNumber
			};

			const confirmed = await snap.request({
				method: 'snap_dialog',
				params: {
					type: 'confirmation',
					content: panel(getDirectPanel(signDoc, accountNumber))
				}
			});

			if (!confirmed) {
				throw new Error('User denied transaction');
			}
			return await wallet.signDirect(signerAddress, sd);
		}
		case 'signAmino': {
			const { signerAddress, signDoc, chainId, enableExtraEntropy } = request.params as unknown as SignAminoRequest;

			const sortedSignDoc = {
				chain_id: chainId || 'pacific-1',
				account_number: signDoc.account_number,
				sequence: signDoc.sequence,
				fee: signDoc.fee,
				memo: signDoc.memo,
				msgs: signDoc.msgs
			};

			const confirmed = await snap.request({
				method: 'snap_dialog',
				params: {
					type: 'confirmation',
					content: panel([heading('Sign Transaction'), { value: JSON.stringify(sortedSignDoc, null, 2), type: NodeType.Copyable }])
				}
			});

			if (!confirmed) throw new Error('User denied transaction');

			return await wallet.signAmino(signerAddress, sortedSignDoc, { extraEntropy: !!enableExtraEntropy });
		}
		case 'getPrivateKey': {
			return await getPrivateKey(account_index);
		}
		default:
			throw new Error('Method not found.');
	}
};
