import { StdSignDoc } from '@cosmjs/amino';
import { serializeSignDoc } from '@cosmjs/amino/build/signdoc';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

export function serializeDirectSignDoc(signDoc: SignDoc) {
	return SignDoc.encode(
		SignDoc.fromPartial({
			accountNumber: signDoc.accountNumber.toString(),
			authInfoBytes: signDoc.authInfoBytes,
			bodyBytes: signDoc.bodyBytes,
			chainId: signDoc.chainId
		})
	).finish();
}

export function serializeAminoSignDoc(signDoc: StdSignDoc) {
	return serializeSignDoc(signDoc);
}
