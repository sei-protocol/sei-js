import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { SignAminoRequest, SignDirectRequest } from './types';
import Long from 'long';
import { sanitizedUint8Array } from './utils';
import { getAminoPanel, getDirectPanel } from './ui';
import { BIP44CoinTypeNode, getBIP44AddressKeyDeriver } from '@metamask/key-tree';
import { SnapRequest } from './types';
import { SnapWallet } from './snapWallet';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

export const getPrivateKey = async (account_index: number = 0) => {
	const bip44CoinNode = (await snap.request({
		method: 'snap_getBip44Entropy',
		params: {
			coinType: 118
		}
	})) as unknown as BIP44CoinTypeNode;

	const bip44AddressKeyDeriver = await getBIP44AddressKeyDeriver(bip44CoinNode);
	return await bip44AddressKeyDeriver(account_index);
};

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
	const { account_index } = request.params as unknown as SnapRequest;

	switch (request.method) {
		case 'signDirect': {
			const account = await getPrivateKey(account_index);

			if (!account?.privateKey) return;

			const wallet = SnapWallet.create(account.privateKey);

			const params = request.params as unknown as SignDirectRequest;

			const { signerAddress, signDoc } = params;

			const { low, high, unsigned } = signDoc.accountNumber;
			const accountNumber = new Long(low, high, unsigned);

			const sd: SignDoc = {
				bodyBytes: sanitizedUint8Array(signDoc.bodyBytes),
				authInfoBytes: sanitizedUint8Array(signDoc.authInfoBytes),
				chainId: signDoc.chainId,
				accountNumber
			};

			const confirmed = await snap.request({
				method: 'snap_dialog',
				params: {
					type: 'confirmation',
					content: getDirectPanel(signDoc, accountNumber)
				}
			});

			if (!confirmed) throw new Error('User denied transaction');

			return await wallet.signDirect(signerAddress, sd);
		}
		case 'signAmino': {
			const { signerAddress, signDoc, enableExtraEntropy, isADR36 } = request.params as unknown as SignAminoRequest;

			const account = await getPrivateKey(account_index);

			if (!account?.privateKey) return;

			const wallet = SnapWallet.create(account.privateKey);

			const confirmed = await snap.request({
				method: 'snap_dialog',
				params: {
					type: 'confirmation',
					content: getAminoPanel(signDoc, isADR36)
				}
			});

			if (!confirmed) throw new Error('User denied transaction');

			return await wallet.signAmino(signerAddress, signDoc, { extraEntropy: !!enableExtraEntropy });
		}
		case 'getPrivateKey': {
			return await getPrivateKey(account_index);
		}
		default:
			throw new Error('Method not found.');
	}
};
