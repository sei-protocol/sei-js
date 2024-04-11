import { StdSignDoc } from '@cosmjs/amino';
import { serializeSignDoc } from '@cosmjs/amino/build/signdoc';
import { cosmos } from '@sei-js/proto';
import { SignDoc } from '@sei-js/proto/dist/types/codegen/cosmos/tx/v1beta1/tx';

/**
 * Serializes the given signDoc object.
 * @param signDoc The SignDoc object to be serialized.
 * @returns An array of bytes representing the serialized SignDoc object.
 * @category Utils
 */
export function serializeDirectSignDoc(signDoc: SignDoc): Uint8Array {
	return cosmos.tx.v1beta1.SignDoc.encode(
		cosmos.tx.v1beta1.SignDoc.fromPartial({
			accountNumber: signDoc.accountNumber,
			authInfoBytes: signDoc.authInfoBytes,
			bodyBytes: signDoc.bodyBytes,
			chainId: signDoc.chainId
		})
	).finish();
}

/**
 * Serializes the given StdSignDoc object.
 * @param signDoc The StdSignDoc object to be serialized.
 * @returns An array of bytes representing the serialized StdSignDoc object.
 * @category Utils
 */
export function serializeAminoSignDoc(signDoc: StdSignDoc): Uint8Array {
	return serializeSignDoc(signDoc);
}
