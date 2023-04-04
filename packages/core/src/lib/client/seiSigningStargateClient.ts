import {
  AminoMsg,
  isSecp256k1Pubkey,
  makeSignDoc,
  serializeSignDoc,
  StdTx,
  makeStdTx,
} from '@cosmjs/amino';
import { Secp256k1, Secp256k1Signature, sha256 } from '@cosmjs/crypto';
import { fromBase64, fromBech32, toBase64 } from '@cosmjs/encoding';
import { isOfflineDirectSigner, OfflineSigner } from '@cosmjs/proto-signing';
import {
  HttpEndpoint,
  IndexedTx,
  isSearchByHeightQuery,
  isSearchBySentFromOrToQuery,
  isSearchByTagsQuery,
  SearchTxFilter,
  SearchTxQuery,
  SigningStargateClient,
  SigningStargateClientOptions,
  StdFee,
} from '@cosmjs/stargate';
import { arrayContentEquals, assert, isNonNullObject } from '@cosmjs/utils';
import equals from 'fast-deep-equal';

import { Tendermint35Client } from '../tendermint35';
import { txsQuery } from './common';
import { rawSecp256k1PubkeyToRawAddress } from '@cosmjs/tendermint-rpc';

/**
 * See ADR-036
 */
interface MsgSignData extends AminoMsg {
  readonly type: 'sign/MsgSignData';
  readonly value: {
    /** Bech32 account address */
    signer: string;
    /** Base64 encoded data */
    data: string;
  };
}

export function isMsgSignData(msg: AminoMsg): msg is MsgSignData {
  const castedMsg = msg as MsgSignData;
  if (castedMsg.type !== 'sign/MsgSignData') return false;
  if (!isNonNullObject(castedMsg.value)) return false;
  if (typeof castedMsg.value.signer !== 'string') return false;
  if (typeof castedMsg.value.data !== 'string') return false;
  return true;
}

export class SeiSigningStargateClient extends SigningStargateClient {
  private readonly seiSigner: OfflineSigner;

  protected constructor(
    tmClient: Tendermint35Client | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions
  ) {
    // Temporary workaround to pass a Tendermint35Client into a StargateClient
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    super(tmClient as any, signer, options);
    this.seiSigner = signer;
  }

  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {}
  ): Promise<SeiSigningStargateClient> {
    const tmClient = await Tendermint35Client.connect(endpoint);
    return new SeiSigningStargateClient(tmClient, signer, options);
  }

  public async getTx(id: string): Promise<IndexedTx | null> {
    const results = await this.txsQueryTm35(`tx.hash='${id}'`);
    return results[0] ?? null;
  }

  public async searchTx(
    query: SearchTxQuery,
    filter: SearchTxFilter = {}
  ): Promise<readonly IndexedTx[]> {
    const minHeight = filter.minHeight || 0;
    const maxHeight = filter.maxHeight || Number.MAX_SAFE_INTEGER;

    if (maxHeight < minHeight) return []; // optional optimization

    function withFilters(originalQuery: string): string {
      return `${originalQuery} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
    }

    let txs: readonly IndexedTx[];

    if (isSearchByHeightQuery(query)) {
      txs =
        query.height >= minHeight && query.height <= maxHeight
          ? await this.txsQueryTm35(`tx.height=${query.height}`)
          : [];
    } else if (isSearchBySentFromOrToQuery(query)) {
      const sentQuery = withFilters(
        `message.module='bank' AND transfer.sender='${query.sentFromOrTo}'`
      );
      const receivedQuery = withFilters(
        `message.module='bank' AND transfer.recipient='${query.sentFromOrTo}'`
      );
      const [sent, received] = await Promise.all(
        [sentQuery, receivedQuery].map((rawQuery) =>
          this.txsQueryTm35(rawQuery)
        )
      );
      const sentHashes = sent.map((t) => t.hash);
      txs = [...sent, ...received.filter((t) => !sentHashes.includes(t.hash))];
    } else if (isSearchByTagsQuery(query)) {
      const rawQuery = withFilters(
        query.tags.map((t) => `${t.key}='${t.value}'`).join(' AND ')
      );
      txs = await this.txsQueryTm35(rawQuery);
    } else {
      throw new Error('Unknown query type');
    }

    const filtered = txs.filter(
      (tx) => tx.height >= minHeight && tx.height <= maxHeight
    );
    return filtered;
  }

  private async txsQueryTm35(query: string): Promise<readonly IndexedTx[]> {
    const tmClient = this.forceGetTmClient() as unknown as Tendermint35Client;
    return txsQuery(tmClient, query);
  }

  // This is taken from https://github.com/cosmos/cosmjs/pull/847
  // ADR-036 was never finalized, so this is still experimental and can change at any time
  public async experimentalAdr36Sign(
    signerAddress: string,
    data: Uint8Array | Uint8Array[]
  ): Promise<StdTx> {
    const accountNumber = 0;
    const sequence = 0;
    const chainId = '';
    const fee: StdFee = {
      gas: '0',
      amount: [],
    };
    const memo = '';

    const datas = Array.isArray(data) ? data : [data];

    const msgs: MsgSignData[] = datas.map(
      (d): MsgSignData => ({
        type: 'sign/MsgSignData',
        value: {
          signer: signerAddress,
          data: toBase64(d),
        },
      })
    );

    assert(!isOfflineDirectSigner(this.seiSigner));
    const accountFromSigner = (await this.seiSigner.getAccounts()).find(
      (account) => account.address === signerAddress
    );
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer');
    }
    const signDoc = makeSignDoc(
      msgs,
      fee,
      chainId,
      memo,
      accountNumber,
      sequence
    );
    const { signature, signed } = await this.seiSigner.signAmino(
      signerAddress,
      signDoc
    );
    if (!equals(signDoc, signed)) {
      throw new Error(
        'The signed document differs from the signing instruction. This is not supported for ADR-036.'
      );
    }

    return makeStdTx(signDoc, signature);
  }

  public static async experimentalAdr36Verify(signed: StdTx): Promise<boolean> {
    // Restrictions from ADR-036
    if (signed.memo !== '') throw new Error('Memo must be empty.');
    if (signed.fee.gas !== '0') throw new Error('Fee gas must 0.');
    if (signed.fee.amount.length !== 0)
      throw new Error('Fee amount must be an empty array.');

    const accountNumber = 0;
    const sequence = 0;
    const chainId = '';

    // Check `msg` array
    const signedMessages = signed.msg;
    if (!signedMessages.every(isMsgSignData)) {
      throw new Error(`Found message that is not the expected type.`);
    }
    if (signedMessages.length === 0) {
      throw new Error(
        'No message found. Without messages we cannot determine the signer address.'
      );
    }
    // TODO: restrict number of messages?

    const signatures = signed.signatures;
    if (signatures.length !== 1)
      throw new Error('Must have exactly one signature to be supported.');
    const signature = signatures[0];
    if (!isSecp256k1Pubkey(signature.pub_key)) {
      throw new Error('Only secp256k1 signatures are supported.');
    }

    const signBytes = serializeSignDoc(
      makeSignDoc(
        signed.msg,
        signed.fee,
        chainId,
        signed.memo,
        accountNumber,
        sequence
      )
    );
    const prehashed = sha256(signBytes);

    const secpSignature = Secp256k1Signature.fromFixedLength(
      fromBase64(signature.signature)
    );
    const rawSecp256k1Pubkey = fromBase64(signature.pub_key.value);
    const rawSignerAddress = rawSecp256k1PubkeyToRawAddress(rawSecp256k1Pubkey);

    if (
      signedMessages.some(
        (msg) =>
          !arrayContentEquals(
            fromBech32(msg.value.signer).data,
            rawSignerAddress
          )
      )
    ) {
      throw new Error(
        'Found mismatch between signer in message and public key'
      );
    }

    const ok = await Secp256k1.verifySignature(
      secpSignature,
      prehashed,
      rawSecp256k1Pubkey
    );
    return ok;
  }
}
