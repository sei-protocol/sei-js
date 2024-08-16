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

export const createTransportAndApp = async () => {
  const transport = await Transport.create();
  const app = new SeiApp(transport);
  return {transport, app};
};

export const getAddresses = async (app: SeiApp, path: string) => {
  const evmAddress = await app.getEVMAddress(path);
  const nativeAddress = await app.getCosmosAddress(path);
  return {evmAddress, nativeAddress};
};

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

