import {
  HttpEndpoint,
  IndexedTx,
  isSearchByHeightQuery,
  isSearchBySentFromOrToQuery,
  isSearchByTagsQuery,
  SearchTxFilter,
  SearchTxQuery,
  StargateClient,
  StargateClientOptions,
} from '@cosmjs/stargate';
import { toHex } from '@cosmjs/encoding';

import { Tendermint35Client, TxSearchResponse } from '../tendermint35';
import { fromTendermint35Event } from './events';

export class SeiStargateClient extends StargateClient {
  protected constructor(
    tmClient: Tendermint35Client | undefined,
    options: StargateClientOptions
  ) {
    super(tmClient as any, options);
  }

  public static async connect(
    endpoint: string | HttpEndpoint,
    options: StargateClientOptions = {}
  ): Promise<StargateClient> {
    const tmClient = await Tendermint35Client.connect(endpoint);
    return new SeiStargateClient(tmClient, options);
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
    const results: TxSearchResponse = await this.forceGetTmClient().txSearchAll(
      {
        query: query,
      }
    );
    return results.txs.map((tx) => {
      return {
        height: tx.height,
        hash: toHex(tx.hash).toUpperCase(),
        code: tx.result.code,
        events: tx.result.events.map(fromTendermint35Event),
        rawLog: tx.result.log || '',
        tx: tx.tx,
        gasUsed: tx.result.gasUsed,
        gasWanted: tx.result.gasWanted,
      };
    });
  }
}
