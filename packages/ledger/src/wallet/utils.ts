import {
  Account,
  AminoTypes,
  createDefaultAminoConverters,
  defaultRegistryTypes,
  StargateClient,
  StdFee
} from "@cosmjs/stargate";
import Transport from "@ledgerhq/hw-transport-node-hid";
import {
  AminoMsg,
  AminoSignResponse,
  encodeSecp256k1Pubkey,
  encodeSecp256k1Signature,
  makeSignDoc,
  serializeSignDoc,
  StdSignDoc,
} from "@cosmjs/amino";
import {fromBase64, fromHex} from "@cosmjs/encoding";
import {TxRaw} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {encodePubkey, makeAuthInfoBytes, Registry, TxBodyEncodeObject} from "@cosmjs/proto-signing";
import {Secp256k1Signature} from "@cosmjs/crypto";
import {Int53} from "@cosmjs/math";
import {SignMode} from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import {SeiApp} from "@zondax/ledger-sei";

/**
 * Creates a transport and app instance
 */
export const createTransportAndApp = async () => {
  const transport = await Transport.create();
  const app = new SeiApp(transport);
  return {transport, app};
};

/**
 * Get the EVM and Cosmos addresses from the Ledger device
 * @param app Ledger Sei app instance
 * @param path hd derivation path (e.g. "m/44'/60'/0'/0/0")
 */
export const getAddresses = async (app: SeiApp, path: string) => {
  const evmAddress = await app.getEVMAddress(path);
  const nativeAddress = await app.getCosmosAddress(path);
  return {evmAddress, nativeAddress};
};

/**
 * Create a sign doc for a Cosmos transaction.
 *
 * Example usage:
 *
 *   const aminoMsg: AminoMsg = {
 *     type: "cosmos-sdk/MsgDelegate",
 *     value: {
 *       delegator_address: nativeAddress.address,
 *       validator_address: validatorAddress,
 *       amount: coin("1000", "usei"),
 *     },
 *   };
 *
 *   const fee: StdFee = {
 *     amount: [{denom: "usei", amount: "20000"}],
 *     gas: "200000",
 *   };
 *
 *   const chainId = "atlantic-2";
 *   const memo = "Delegation";
 *   const account = await client.getAccount(nativeAddress.address);
 *
 *   const signDoc = createSignDoc(aminoMsg, fee, chainId, memo, account);
 *
 * @param aminoMsg amino message
 * @param fee transaction fee
 * @param chainId chain id
 * @param memo transaction memo
 * @param account account
 */
export const createSignDoc = (aminoMsg: AminoMsg, fee: StdFee, chainId: string, memo: string, account: Account) => {
  return makeSignDoc(
    [aminoMsg],
    fee,
    chainId,
    memo,
    account.accountNumber.toString(),
    account.sequence.toString(),
  );
};

/**
 * Sign and broadcast a Cosmos transaction
 *
 * @param app Ledger Sei app instance
 * @param path hd derivation path (e.g. "m/44'/60'/0'/0/0")
 * @param signDoc sign doc
 * @param client Stargate client
 * @param nativeAddress native Sei address
 */
export const signAndBroadcast = async (app: SeiApp, path: string, signDoc: StdSignDoc, client: StargateClient, nativeAddress: {
  address: string,
  pubKey: string
}) => {
  const signature = await app.signCosmos(path, Buffer.from(serializeSignDoc(signDoc)));
  const sig = new Secp256k1Signature(signature.r, signature.s).toFixedLength();
  const aminoSignResponse: AminoSignResponse = {
    signed: signDoc,
    signature: encodeSecp256k1Signature(fromHex(nativeAddress.pubKey), sig),
  };

  const registry = new Registry(defaultRegistryTypes);
  const aminoTypes = new AminoTypes(createDefaultAminoConverters());
  const signedTxBody = {
    messages: aminoSignResponse.signed.msgs.map((msg) => aminoTypes.fromAmino(msg)),
    memo: aminoSignResponse.signed.memo,
  };
  const signedTxBodyEncodeObject: TxBodyEncodeObject = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    value: signedTxBody,
  };
  const signedTxBodyBytes = registry.encode(signedTxBodyEncodeObject);
  const signedGasLimit = Int53.fromString(aminoSignResponse.signed.fee.gas).toNumber();
  const signedSequence = Int53.fromString(aminoSignResponse.signed.sequence).toNumber();
  const pubkey = encodePubkey(encodeSecp256k1Pubkey(fromHex(nativeAddress.pubKey)));
  const signedAuthInfoBytes = makeAuthInfoBytes(
    [{pubkey, sequence: signedSequence}],
    aminoSignResponse.signed.fee.amount,
    signedGasLimit,
    aminoSignResponse.signed.fee.granter,
    aminoSignResponse.signed.fee.payer,
    SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
  );
  const txRaw = TxRaw.fromPartial({
    bodyBytes: signedTxBodyBytes,
    authInfoBytes: signedAuthInfoBytes,
    signatures: [fromBase64(aminoSignResponse.signature.signature)],
  });

  return await client.broadcastTx(TxRaw.encode(txRaw).finish());
};

