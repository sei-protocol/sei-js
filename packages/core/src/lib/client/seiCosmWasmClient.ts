import {
  CosmWasmClient,
  HttpEndpoint,
  IndexedTx,
} from '@cosmjs/cosmwasm-stargate';
import {
  isSearchByHeightQuery,
  isSearchBySentFromOrToQuery,
  isSearchByTagsQuery,
  SearchTxFilter,
  SearchTxQuery,
} from '@cosmjs/stargate';
import { Tendermint35Client } from '../tendermint35';
import { txsQuery } from './common';

export class SeiCosmWasmClient extends CosmWasmClient {
  protected constructor(tmClient: Tendermint35Client | undefined) {
    // Temporary workaround to pass a Tendermint35Client into a CosmWasmClient
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    super(tmClient as any);
  }

  public static async connect(
    endpoint: string | HttpEndpoint
  ): Promise<SeiCosmWasmClient> {
    const tmClient = await Tendermint35Client.connect(endpoint);
    return new SeiCosmWasmClient(tmClient);
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
}
