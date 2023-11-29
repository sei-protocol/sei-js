import { AuthInfo, TxBody } from '@sei-js/proto/dist/types/codegen/cosmos/tx/v1beta1/tx';
import { byteArrayToHex, longResponseToNumber, sanitizedUint8Array } from './utils';
import { cosmos, ibc, seiprotocol, tendermint, cosmwasm, google } from '@sei-js/proto';
import { Any } from '@sei-js/proto/dist/types/codegen/google/protobuf/any';
import Long from 'long';
import { divider, heading, text } from '@metamask/snaps-ui';

interface DecodedTxBody {
	timeoutHeight: Long;
	messages: ({ typeUrl: string; value: any } | Any)[];
	memo: string;
	extensionOptions: Any[];
	nonCriticalExtensionOptions: Any[];
}

export const decodeTxBody = (txBody: TxBody): DecodedTxBody => {
	return {
		...txBody,
		messages: txBody.messages.map((message) => {
			const messageValueBytes = sanitizedUint8Array(message.value);
			const pathParts = message.typeUrl.substring(1).split('.');
			const typeName = pathParts.pop();

			if (!typeName) throw new Error('Type name not found');

			try {
				let importedModule: any;
				switch (pathParts[0]) {
					case 'cosmwasm':
						importedModule = cosmwasm;
						break;
					case 'seiprotocol':
						importedModule = seiprotocol;
						break;
					case 'ibc':
						importedModule = ibc;
						break;
					case 'tendermint':
						importedModule = tendermint;
						break;
					case 'google':
						importedModule = google;
						break;
					case 'cosmos':
					default:
						importedModule = cosmos;
						break;
				}

				const relevantPathParts = pathParts.slice(1);

				const module = relevantPathParts.reduce((acc, part) => {
					return acc && acc[part] ? acc[part] : null;
				}, importedModule);

				if (!module) throw new Error('Module not found');

				const messageType = module[typeName];
				if (messageType && typeof messageType.decode === 'function') {
					return {
						...message,
						value: messageType.decode(messageValueBytes)
					};
				} else {
					throw new Error('Decode function not found');
				}
			} catch (error: any) {
				//Default to bytes
				console.warn(`Error decoding message: ${message.typeUrl}, Error: ${error.message}`);
				return message;
			}
		})
	};
};

export const decodeRawAuthInfo = (authInfo: AuthInfo): any => {
	const publicKeyBytes = sanitizedUint8Array(authInfo.signerInfos[0].publicKey.value);
	const decodedPubKey = cosmos.crypto.secp256k1.PubKey.decode(publicKeyBytes);

	const publicKeyHex = byteArrayToHex(decodedPubKey.key);

	const sequenceNumber = longResponseToNumber(authInfo.signerInfos[0].sequence);
	const signerInfos: any = [...authInfo.signerInfos];
	signerInfos[0] = {
		...authInfo.signerInfos[0],
		publicKey: {
			typeUrl: '/cosmos.crypto.secp256k1.PubKey',
			value: publicKeyHex
		},
		sequence: sequenceNumber
	};

	const gasLimit = longResponseToNumber(authInfo.fee.gasLimit);

	return { ...authInfo, signerInfos, fee: { ...authInfo.fee, gasLimit } };
};

export const getDirectPanel = (signDoc: any, accountNumber: Long): any => {
	const authInfoBytes = sanitizedUint8Array(signDoc.authInfoBytes);
	const decodedAuthInfo = cosmos.tx.v1beta1.AuthInfo.decode(authInfoBytes);
	const readableAuthInfo = decodeRawAuthInfo(decodedAuthInfo);

	const bodyBytes = sanitizedUint8Array(signDoc.bodyBytes);
	const decodedBody = cosmos.tx.v1beta1.TxBody.decode(bodyBytes);
	const readableBody = decodeTxBody(decodedBody);

	const panel = [
		heading('Sign Transaction'),
		divider(),
		heading('Chain ID'),
		text(signDoc.chainId),
		divider(),
		heading('Account Number'),
		text(accountNumber.toString()),
		divider(),
		heading('Messages'),
		text(JSON.stringify(readableBody.messages, null, 2)),
		divider(),
		heading('Fee'),
		text(JSON.stringify(readableAuthInfo.fee, null, 2))
	];

	if (readableBody.memo) {
		panel.push(heading('Memo'), text(JSON.stringify(readableBody.memo, null, 2)), divider());
	}

	return panel;
};
